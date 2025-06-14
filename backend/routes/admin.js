import express from "express";
const router = express.Router();
import {
  getAdmin,
  setAdminActivity,
  newProduct,
  getCategoryId,
  getBrandId,
  getAllOrders,
  getAllOrdersByType,
  getAllOrdersByStatus,
  updateStatus,
  updateDescription,
} from "../utils/sql.js";
import database from "../utils/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authenticateToken, removeToken } from "../utils/helper.js";
import env from "dotenv";

env.config();

// Get route will verify token authenticate
router.get("/", authenticateToken("token"), async (req, res) => {
  res.json({ message: "You are authorized!" });
  const [result] = await database.query(setAdminActivity, [req.user.aid]);
  console.log(result);
});

router.post("/upload", authenticateToken("token"), async (req, res) => {
  try {
    const { name, description, price, store, category, brand, tags, media } =
      req.body;
    const { aid, role } = req.user;
    const [catId] = await database.query(getCategoryId, [category, store]);
    const [brandId] = await database.query(getBrandId, [brand, store]);

    const data = [
      name,
      price,
      description,
      catId[0][0].cid,
      brandId[0][0].bid,
      JSON.stringify(tags),
      "official",
      aid,
      role,
      JSON.stringify(media),
    ];
    const [result] = await database.query(newProduct, data);
    console.log(result);
    res.status(201).json({ message: "Product created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const [admin] = await database.query(getAdmin, [username]);
    if (Array.isArray(admin) && admin.length == 1) {
      const isMatch = await bcrypt.compare(password, admin[0].password);

      if (isMatch) {
        await database.query(setAdminActivity, [admin[0].aid]);
        const payload = { aid: admin[0].aid, role: admin[0].role };
        const token = jwt.sign(payload, process.env.ACCESS_SECRET, {
          expiresIn: "1h",
        });

        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.COOKIE_SECURE === "true",
          sameSite: process.env.COOKIE_SAMESITE,
          maxAge: 3600000,
        });

        res.json({
          message: "Logged in successfully!",
          admin: { aid: admin[0].aid, username: admin[0].username },
        });
      } else {
        res.status(401).json({ message: "Invalid password!" });
      }
    } else {
      res.status(404).json({ message: "User doesn't exist!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
    console.log(error);
  }
});

router.get("/orders", authenticateToken("token"), async (req, res) => {
  const param = req.query.param;
  let result = [];
  try {
    if (param == "official") {
      [result] = await database.query(getAllOrdersByType, [param]);
    } else if (param == "delivered") {
      [result] = await database.query(getAllOrdersByStatus, [param]);
    } else {
      [result] = await database.query(getAllOrders);
    }
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error!" });
  }
});

router.patch("/status", authenticateToken("token"), async (req, res) => {
  const oid = req.body.oid;
  const status = req.body.status;
  try {
    const result = await database.query(updateStatus, [oid, status]);
    res.json(result);
    console.log(result)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error!" });
  }
});

router.patch("/description", authenticateToken("token"), async (req, res) => {
  const oid = req.body.oid;
  const description = req.body.description;
  console.log([oid, description])
  try {
    const result = await database.query(updateDescription, [oid, description]);
    res.json(result);
    console.log(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error!" });
  }
});

router.get("/logout", authenticateToken("token"), async (req, res) => {
  try {
    removeToken(res, "token");
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
    console.log(error);
  }
});

export default router;
