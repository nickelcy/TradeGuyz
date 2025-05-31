import express from "express";
const router = express.Router();
import { getUser, getOrdersById, insertUser } from "../utils/sql.js";
import database from "../utils/database.js";
import bcrypt from "bcrypt";
import env from "dotenv";
env.config();
import jwt from "jsonwebtoken";
import { authenticateToken, removeToken, userExists } from "../utils/helper.js";

router.get("/", authenticateToken("user_token"), (req, res) => {
  res.json({ message: "You are authorized!" });
});

router.post("/register", userExists, async (req, res) => {
  const { firstname, lastname, username, email, password, telephone } =
    req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    await database.query(insertUser, [
      firstname,
      lastname,
      username,
      email,
      hashedPassword,
      telephone,
    ]);

    res.status(201).json({ message: "Successfully created account." });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/orders", authenticateToken("user_token"), async (req, res) => {
  const [orders] = await database.query(getOrdersById, [req.user.uid]);
  res.json(orders);
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const [user] = await database.query(getUser, [username]);
    if (Array.isArray(user) && user.length == 1) {
      const isMatch = await bcrypt.compare(password, user[0].password);

      if (isMatch) {
        const payload = { uid: user[0].uid, role: user[0].role };
        const user_token = jwt.sign(payload, process.env.ACCESS_SECRET, {
          expiresIn: "1h",
        });

        res.cookie("user_token", user_token, {
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
      res.status(404).json({ message: "User doesn't exist!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
});

router.get("/logout", async (req, res) => {
  removeToken(res, "user_token");
});

export default router;
