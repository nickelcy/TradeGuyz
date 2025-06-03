import express from "express";
import cors from "cors";
import filters from "./routes/filters.js";
import admin from "./routes/admin.js";
import user from "./routes/user.js";
import seller from "./routes/seller.js";
import cookieParser from "cookie-parser";
import env from "dotenv";

env.config({ path: `.env.development` });
// env.config({ path: `.env.production` });

const port = process.env.PORT;
const app = express();

app.use(express.json());

// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://683ebe37db92aeef4ad1f00d--testdeployfrontend.netlify.app",
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, origin);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

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
