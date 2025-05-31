/**
 * Formats an array of product entries by grouping multiple image URLs
 * under a single product object based on the product ID (pid).
 *
 * @param {Promise<Array>} products - A promise that resolves to an array of product objects,
 *                                    where each product may have duplicate entries due to multiple images.
 * @returns {Promise<Array>} - A promise that resolves to a deduplicated array of product objects,
 *                              each containing an `imgUrl` array of associated image URLs.
 */
const formatArray = async (products) => {
  const formatted = [];
  const allProducts = await products;

  allProducts.forEach((product) => {
    // Check if product with same pid already exists in formatted list
    const existing = formatted.find((p) => p.pid === product.pid);

    if (existing) {
      // If found, add image URL to its imgUrl array
      existing.imgUrl.push(product.imgUrl);
    } else {
      // If not found, create new product entry with imgUrl as an array
      formatted.push({ ...product, imgUrl: [product.imgUrl] });
    }
  });

  return formatted;
};
export default formatArray;

/**
 * Middleware factory for JWT authentication using a cookie-based token.
 *
 * @param {string} [cookieName='user_token'] - The name of the cookie containing the JWT.
 * @returns {Function} Express middleware function that authenticates the request.
 *
 * The middleware:
 * - Extracts a JWT from the specified cookie.
 * - Verifies the token using the secret in `process.env.ACCESS_SECRET`.
 * - Attaches the decoded user payload to `req.user` if valid.
 * - Returns a 401 if the token is missing.
 * - Returns a 403 if the token is invalid or expired.
 */
import jwt from "jsonwebtoken";
export const authenticateToken = (cookieName = "user_token") => {
  return (req, res, next) => {
    const token = req.cookies?.[cookieName];

    if (!token)
      return res.status(401).json({ message: "Access Denied: No token" });

    try {
      const verified = jwt.verify(token, process.env.ACCESS_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      res.status(403).json({ message: "Invalid or expired token" });
    }
  };
};

/**
 * Clears a specific cookie and sends a JSON confirmation response.
 *
 * @param {Object} res - Express response object.
 * @param {string} cookieName - Name of the cookie to clear.
 */
export const removeToken = (res, cookieName) => {
  res.clearCookie(cookieName, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });
  res.status(200).json({ message: "Cookie cleared" });
};





// Middleware: userExists
// Purpose: Prevents registration if the username, email, or phone number already exists in the database.

import database from "./database.js";
import { usernameExists, emailExists, phoneExists } from "./sql.js";

/**
 * Checks if the provided username, email, or telephone already exists in the database.
 * If any of them exist, responds with a message and halts the request.
 * Otherwise, proceeds to the next middleware or route handler.
 *
 * Expected input (in req.body):
 * - username: string
 * - email: string
 * - telephone: string
 */
export const userExists = async (req, res, next) => {
  const { username, email, telephone } = req.body;

  try {
    const [usernameResult] = await database.query(usernameExists, [username]);
    const [emailResult] = await database.query(emailExists, [email]);
    const [phoneResult] = await database.query(phoneExists, [telephone]);

    if (Array.isArray(usernameResult) && usernameResult.length !== 0) {
      return res.status(409).json({
        message: `User with the username "${username}" already exists.`,
      });
    }

    if (Array.isArray(emailResult) && emailResult.length !== 0) {
      return res.status(409).json({
        message: `User with the email "${email}" already exists.`,
      });
    }

    if (Array.isArray(phoneResult) && phoneResult.length !== 0) {
      return res.status(409).json({
        message: `User with the telephone number "${telephone}" already exists.`,
      });
    }

    next(); // Proceed if no duplicates found
  } catch (error) {
    console.error("Error in userExists middleware:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


