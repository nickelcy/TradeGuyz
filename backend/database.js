const mysql = require('mysql2')
require("dotenv").config()

const pool = mysql.createPool(process.env.DB_URI)

module.exports = pool.promise();