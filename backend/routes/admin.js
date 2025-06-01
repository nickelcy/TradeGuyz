import express from "express";
const router = express.Router();
import { getAdmin, setAdminActivity, newProduct } from "../utils/sql.js";
import database from "../utils/database.js";
import bcrypt from "bcrypt";
import env from "dotenv";
env.config();
import jwt from "jsonwebtoken";
import { authenticateToken, removeToken } from "../utils/helper.js";

// Get route will verify token authenticate

router.get("/", authenticateToken("token"), (req, res) => {
  res.json({ message: "You are authorized!" });
});

router.post("/upload", authenticateToken("token"), async (req, res) => {
  try {
    const { name, price, description, category, brand, tags, media } = req.body;
    const { aid, role } = req.user;
    const data = [
      name,
      price,
      description,
      category,
      brand,
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
        const payload = { aid: admin[0].aid, role: admin[0].role };
        const token = jwt.sign(payload, process.env.ACCESS_SECRET, {
          expiresIn: "1h",
        });

        res.cookie("token", token, {
          httpOnly: true,
          secure: true, 
          sameSite: "none",
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

router.get("/logout", authenticateToken("token"), async (req, res) => {
  try {
    const [result] = await database.query(setAdminActivity, [req.user.aid]);
    removeToken(res, "token");
    console.log(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
    console.log(error);
  }
});

export default router;
