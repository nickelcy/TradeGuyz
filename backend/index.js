const express = require("express");
const database = require("./database.js");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT;
const app = express();
app.use(express.json());

// app.use(
//   cors({
//     origin: process.env.CLIENT_PUBLIC,
//     methods: ["GET", "POST"],
//     // credentials: true
//   })
// );

app.use(cors());

// Get all products sends it to client
app.get("/", async (req, res) => {
  try {
    const [products] = await database.query(
      "SELECT * FROM bd9xf2bechix4akyzgwr.products;"
    );
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500)
  }
});

app.get("filter/:parameter", (req, res) => {
  console.log(req.params);
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Serve Listening on Port:", port);
});
