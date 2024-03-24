// Import necessary modules
const jwt = require("jsonwebtoken");
const { SECRET_KEY, T_AUTH } = require("../config/config.js");
const knexInstance = require("../config/db/db.js");
const { logger } = require("../config/logger.js");

// Middleware function to verify JWT token
module.exports = verifyToken = async (req, res, next) => {
    try {
        // Retrieve token from request headers
        const token = req.headers["x-access-token"];

        // Check if token exists
        if (!token) {
            // Log warning and return 403 Forbidden status
            logger.warn("Token does not exist");
            return res.status(403).json({ message: "No access token provided" });
        }

        // Verify the token
        const decoded = jwt.verify(token, SECRET_KEY);

        // Check if the user exists in the database
        const user = await knexInstance(T_AUTH).select("*").where("id", "=", decoded.id);

        // If user does not exist, return 404 Not Found
        if (user.length === 0) {
            // Log warning and return 404 Not Found status
            logger.warn("User does not exist");
            return res.status(404).json({ message: "User does not exist" });
        }

        // Log info and proceed to the next middleware
        logger.info("User verified");
        next();
    } catch (error) {
        // Log error and return 401 Unauthorized status
        logger.error("error", error);
        return res.status(401).json({ message: "Unauthorized" });
    }
};