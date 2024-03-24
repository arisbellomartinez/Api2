const app =require("./app.js");
const { PORT } =require("./config/config.js");
const { logger } = require("./config/logger.js");

// Start the server on the specified port
app.listen(PORT, () => {
    // Log info and print server status
    logger.info(`Server is running on port ${PORT}`);
    console.log(`Server is running on port ${PORT}`);
});