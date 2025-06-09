import express from "express";
import cors from "cors";
import filters from "./routes/filters.js";
import admin from "./routes/admin.js";
import user from "./routes/user.js";
import seller from "./routes/seller.js";
import cookieParser from "cookie-parser";
import env from "dotenv";

env.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT,
    credentials: true,
  })
);

app.use(cookieParser());
app.use("/admin", admin);
app.use("/user", user);
app.use("/seller", seller);
app.use("/", filters);

app.get("/", (req, res) => {
  res.send("Hello, form backend!");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Server Listening on Port:", port);
});
