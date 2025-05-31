import express from "express";
import formatArray from "../utils/helper.js";
import database from "../utils/database.js";
import {
  category_filter,
  allProducts,
  brand_filter,
  multiParams,
} from "../utils/sql.js";

const router = express.Router();

// All Products By Store
router.get("/:store", async (req, res) => {
  try {
    const [products] = await database.query(allProducts, [req.params.store]);
    const formatted = await formatArray(products);
    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Category Filter
router.get("/:store/category/:parameter", async (req, res) => {
  try {
    const [filteredProducts] = await database.query(category_filter, [
      req.params.store,
      req.params.parameter,
    ]);
    const formatted = await formatArray(filteredProducts);
    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// Brand Filter
router.get("/:store/brand/:parameter", async (req, res) => {
  try {
    const [filteredProducts] = await database.query(brand_filter, [
      req.params.store,
      req.params.parameter,
    ]);
    const formatted = await formatArray(filteredProducts);
    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// Search by Name
router.get("/:store/search/:parameter", async (req, res) => {
  try {
    let results = [];
    const search = req.params.parameter.toLowerCase();
    const [products] = await database.query(allProducts, [req.params.store]);

    products.map((product, index) => {
      const product_name = product.product_name.toLowerCase();
      if (product_name.includes(search)) {
        results = [...results, product];
      }
    });
    const formatted = await formatArray(results);
    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// Multi Filter
router.get("/:store/multi/:brand/:category/:range", async (req, res) => {
  const { brand, category, range } = req.params;
  let sql = multiParams;
  const params = [];

  if (brand !== "$") {
    sql += " AND b.name = ?";
    params.push(brand);
  }
  if (category !== "$") {
    sql += " AND c.name = ?";
    params.push(category);
  }
  if (range !== "$") {
    sql += " AND p.price < ?";
    params.push(range);
  }
  try {
    const [filteredProducts] = await database.query(sql, params);
    const formatted = await formatArray(filteredProducts);
    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching filtered products");
  }
});

export default router;
