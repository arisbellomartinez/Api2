// Import dotenv module for environment variables configuration
const { config } = require("dotenv");
// Load environment variables from .env file into process.env
config();

// Define constants for environment variables with default values
module.exports.PORT = process.env.PORT || 8080;
module.exports.DB_HOST = process.env.DB_HOST || "localhost";
module.exports.DB_USER = process.env.DB_USER || "root";
module.exports.DB_PASS = process.env.DB_PASS || "12345";
module.exports.DB_DATABASE = process.env.DB_DATABASE || "ejemplodb";
module.exports.DB_PORT = process.env.DB_PORT || "3306";
module.exports.SECRET_KEY = process.env.SECRET_KEY;
module.exports.T_USUARIOS = process.env.T_USUARIOS;
module.exports.T_AUTH = process.env.T_AUTH;

// Environment variables provide configuration options for the application.
// The dotenv module loads these variables from a .env file into the process.env object.
// Default values are provided for environment variables that may not be set.
// These constants can be used throughout the application to access configuration values.

