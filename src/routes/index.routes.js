// Import necessary modules
const { Router } = require("express");
const { test } = require("../controlles/index-controller.js");

// Create an Express router instance
const routers = Router();

// Define route for testing
routers.get('/test', test);

// Export the router for use in other parts of the application
module.exports=routers;
