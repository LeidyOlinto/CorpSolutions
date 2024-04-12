require('dotenv').config();

const mysql = require('mysql');

// Create a connection pool
const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Export the connection pool for reuse
module.exports = connection