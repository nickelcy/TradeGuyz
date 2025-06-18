import express from "express";
const router = express.Router();
import { getSeller } from "../utils/sql.js";
import database from "../utils/database.js";
import bcrypt from "bcrypt";
import env from "dotenv";
env.config();
import jwt from "jsonwebtoken";
import { authenticateToken, removeToken } from "../utils/helper.js";

router.get("/", authenticateToken("seller_token"), (req, res) => {
  // console.log(req.user)
  res.json({ message: "You are authorized!" });
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const [seller] = await database.query(getSeller, [username]);
    if (Array.isArray(seller) && seller.length == 1) {
      const isMatch = await bcrypt.compare(password, seller[0].password);

      if (isMatch) {
        const payload = { sid: seller[0].sid, role: seller[0].role, approved: seller[0].approvalStatus };
        const seller_token = jwt.sign(payload, process.env.ACCESS_SECRET, {
          expiresIn: "1h",
        });

        res.cookie("seller_token", seller_token, {
          httpOnly: true,
          secure: false, // Set to false if not using HTTPS locally
          sameSite: "Strict",
          maxAge: 3600000,
        });

        res.json({ message: "Logged in successfully!" });
      } else {
        res.status(401).json({ message: "Invalid password!" });
      }
    } else {
      res.status(404).json({ message: "Seller doesn't exist!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
});

router.get("/logout", async (req, res) => {
  removeToken(res, "seller_token")
});

export default router;
