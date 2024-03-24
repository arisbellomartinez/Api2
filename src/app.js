// Import necessary modules
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const {usuariosRoutes} = require("./routes/usuarios.routes.js");
const indexRoutes = require("./routes/index.routes.js");
const authRoutes = require("./routes/auth.routes.js");
const { logger } = require("./config/logger.js");

// Create an Express application instance
const app = express();

// Middleware for logging HTTP requests
app.use(morgan("dev"));

// Parse incoming JSON requests
app.use(express.json());

// Parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON data from the request body
app.use(bodyParser.json());

// Routes

// Use index routes for "/tasks" path
app.use("/tasks", indexRoutes);

// Use usuarios routes for "/tasks" path
app.use("/tasks", usuariosRoutes);

// Use auth routes for other paths
app.use(authRoutes);

// Error handling for 404 Not Found
app.use((req, res, next) => {
    // Log error and return 404 Not Found status
    logger.error("404 Not Found");
    res.status(404).json({ error: "Not Found" });
});

module.exports = app;