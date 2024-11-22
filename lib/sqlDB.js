// lib/sqlDB.js
import mysql from "mysql2/promise";

// Database connection settings
const connectionConfig = {
  host: process.env.DB_HOST, // Default to localhost if not set
  port: process.env.DB_PORT || 3306, // Default MySQL port
  user: process.env.DB_USER, // MySQL user
  password: process.env.DB_PASSWORD, // MySQL password
  database: process.env.DB_NAME, // Database name
  waitForConnections: true, // Wait for available connections
  connectionLimit: 10, // Max number of connections in the pool
  queueLimit: 0, // No queue limit
};

// Create a connection pool
const pool = mysql.createPool(connectionConfig);

// Export a query function to be used in other parts of the application
export async function query(sql, params) {
  try {
    const [rows] = await pool.execute(sql, params); // Execute the query
    return rows; // Return query results
  } catch (error) {
    console.error("Database query error:", error.message);
    throw error; // Throw error to handle it in the calling function
  }
}

// creating the post adn category
// CREATE TABLE users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   email VARCHAR(255) NOT NULL UNIQUE,
//   password VARCHAR(255) NOT NULL,
//   is_admin BOOLEAN DEFAULT FALSE,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );


// CREATE TABLE posts (
  //   id INT AUTO_INCREMENT PRIMARY KEY,
  //   title VARCHAR(255) NOT NULL,
  //   content TEXT NOT NULL,
  //   category VARCHAR(100),
  //   user_id INT,
  //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  //   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  // );
  // ALTER TABLE posts
  // ADD COLUMN meta_title VARCHAR(255) DEFAULT NULL,
  // ADD COLUMN meta_description TEXT DEFAULT NULL;
  
  // ALTER TABLE posts
  // ADD COLUMN image_url VARCHAR(255) DEFAULT NULL;

// creating the contact
// CREATE TABLE contacts (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   phone_number VARCHAR(20) NOT NULL,
//   message TEXT NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
