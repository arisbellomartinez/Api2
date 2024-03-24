// Import necessary modules
const knexInstance = require("../config/db/db.js");

// Define an Express.js route handler for testing
module.exports= test = async (req, res) => {
    try {
        // Execute a simple SQL query to test the database connection
        const result = await knexInstance.raw("SELECT 1+1 as result");

        // Send the result as JSON response
        res.json(result[0]);
    } catch (error) {
        // Handle errors gracefully
        console.error("Error in test route:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

