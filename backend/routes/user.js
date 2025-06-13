import express from "express";
const router = express.Router();
import {
  getUser,
  getOrdersById,
  insertUser,
  setUserActivity,
  makeOrder,
} from "../utils/sql.js";
import database from "../utils/database.js";
import bcrypt from "bcrypt";
import env from "dotenv";
env.config();
import jwt from "jsonwebtoken";
import {
  authenticateToken,
  removeToken,
  userExists,
  updateTelephoneFunc,
} from "../utils/helper.js";

router.get("/", authenticateToken("user_token"), (req, res) => {
  res.json({ message: "You are authorized!" });
});

router.post("/register", userExists, async (req, res) => {
  const { firstname, lastname, username, email, password, telephone } =
    req.body;

  try {
    const hashedPassword = await bcrypt.hash(password.trim(), 12);

    await database.query(insertUser, [
      firstname.trim(),
      lastname.trim(),
      username.trim(),
      email.trim(),
      hashedPassword,
      telephone.trim(),
      // telephone.trim().replace(" ", "-"),
    ]);

    res.status(201).json({ message: "Successfully created account." });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/orders", authenticateToken("user_token"), async (req, res) => {
  try {
    const [orders] = await database.query(getOrdersById, [req.user.uid]);
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.patch(
  "/update-tel",
  authenticateToken("user_token"),
  updateTelephoneFunc,
  async (req, res) => {
    res.status(201).json({ message: "Updated contact information." });
  }
);

router.post("/mk-order", authenticateToken("user_token"), async (req, res) => {
  const uid = req.user.uid;
  const details = req.body[1];
  const products = req.body[2];
  const type = "normal";
  const code = "000";
  console.log(details);

  const orders = products.map((product) => {
    const order = [
      product.pid,
      product.quantity,
      uid,
      details.collection,
      details.address,
      details.paymentMethod,
      type,
      code,
    ];
    return database.query(makeOrder, order);
  });

  try {
    const results = await Promise.all(orders);
    res.status(200).json({ message: "Orders placed", results });
    // console.log(results)
    // res.json(req.user)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const [user] = await database.query(getUser, [username]);
    if (Array.isArray(user) && user.length == 1) {
      const isMatch = await bcrypt.compare(password, user[0].password);
      // console.log(user);
      if (isMatch) {
        const payload = { uid: user[0].uid, role: user[0].role };
        const user_token = jwt.sign(payload, process.env.ACCESS_SECRET, {
          expiresIn: "1h",
        });

        res.cookie("user_token", user_token, {
          httpOnly: true,
          secure: process.env.COOKIE_SECURE === "true",
          sameSite: process.env.COOKIE_SAMESITE,
          maxAge: 3600000,
        });
        res.json({
          message: "Logged in successfully!",
          user: {
            uid: user[0].uid,
            firstname: user[0].firstname,
            lastname: user[0].lastname,
            email: user[0].email,
            telephone: user[0].telephone,
          },
        }); // Todo: Send only necessary information
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

router.get("/logout", authenticateToken("user_token"), async (req, res) => {
  try {
    const [result] = await database.query(setUserActivity, req.user.uid);
    console.log(result);
    removeToken(res, "user_token");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error!" });
  }
});

export default router;
