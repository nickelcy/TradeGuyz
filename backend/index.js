const express = require("express");
const database = require("./database.js");
require("dotenv").config();
const cors = require("cors");
let {
  category_filter,
  allProducts,
  brand_filter,
  multiParams,
} = require("./sql.js");

const port = process.env.PORT;
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT,
    methods: ["GET", "POST"],
    // credentials: true
  })
);
// app.use(cors());

// Get all products sends it to client
app.get("/", async (req, res) => {
  try {
    const [products] = await database.query(allProducts);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});


// Category Filter
app.get("/filter/category/:parameter", async (req, res) => {
  try {
    const [filteredProducts] = await database.query(category_filter, [
      req.params.parameter,
    ]);
    res.json(filteredProducts);
    // console.log(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// Brand Filter
app.get("/filter/brand/:parameter", async (req, res) => {
  try {
    const [filteredProducts] = await database.query(brand_filter, [
      req.params.parameter,
    ]);
    res.json(filteredProducts);
    // console.log(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

app.get("/search/:parameter", async (req, res) => {
  try {
    let results = [];
    const search = req.params.parameter.toLowerCase();
    const [products] = await database.query(allProducts);

    products.map((product, index) => {
      const product_name = product.product_name.toLowerCase();
      if (product_name.includes(search)) {
        results = [...results, product];
      }
    });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// Multi Filter
app.get("/filter/multi/:brand/:category/:range", async (req, res) => {
  const { brand, category, range } = req.params;
  let sql = multiParams;
  const params = [];

  if (brand !== "none") {
    sql += " AND b.name = ?";
    params.push(brand);
  }
  if (category !== "none") {
    sql += " AND c.name = ?";
    params.push(category);
  }
  if (range !== "none") {
    sql += " AND p.price < ?";
    params.push(range);
  }
  try {
    const [filteredProducts] = await database.query(sql, params);
    res.json(filteredProducts);
    console.log(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching filtered products");
  }
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Server Listening on Port:", port);
});
