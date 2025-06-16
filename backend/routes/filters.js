import express, { response } from "express";
import database from "../utils/database.js";
import {
  category_filter,
  allProducts,
  brand_filter,
  multiParams,
  getStorCategories,
  getStorBrands,
  allStores
} from "../utils/sql.js";

const router = express.Router();



// All stores for display on landing page
router.get("/stores", async (req, res) => {
  try {
    const [stores] = await database.query(allStores);
    res.json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// All Products By Store
router.get("/:store", async (req, res) => {
  try {
    const [products] = await database.query(allProducts, [req.params.store]);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Get all categories by store
router.get("/:store/c", async (req, res) => {
  const response = [];
  try {
    const [storeCategories] = await database.query(getStorCategories, [
      req.params.store,
    ]);
    storeCategories.map((category) => {
      response.push(category.cat_name);
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// Get all categories by store and name
router.get("/:store/c/:category", async (req, res) => {
  try {
    const [filteredProducts] = await database.query(category_filter, [
      req.params.store,
      req.params.category,
    ]);
    res.json(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// Get all brands by store
router.get("/:store/b", async (req, res) => {
  const response = [];
  try {
    const [storeBrands] = await database.query(getStorBrands, [
      req.params.store,
    ]);
    storeBrands.map((brand) => {
      response.push(brand.brand_name);
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// Get all brands by store and name
router.get("/:store/b/:brand", async (req, res) => {
  try {
    const [filteredProducts] = await database.query(brand_filter, [
      req.params.store,
      req.params.brand,
    ]);
    res.json(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// Filter products by name and tags
router.get("/:store/s/:parameter", async (req, res) => {
  try {
    let results = [];
    const search = req.params.parameter.toLowerCase();
    const [products] = await database.query(allProducts, [req.params.store]);

    products.map((product) => {
      const product_name = product.product_name.toLowerCase();
      const product_tags = product.tags;
      if (product_name.includes(search) || Array.isArray(product_tags)  && product_tags.includes(search)) {
        results = [...results, product];
      }
    });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// Filter products by a combination of brand, category and price range
router.get("/:store/multi/:brand/:category/:range", async (req, res) => {
  const { store, brand, category, range } = req.params;
  let sql = multiParams;
  const params = [store];

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
    res.json(filteredProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching filtered products");
  }
});

export default router;
