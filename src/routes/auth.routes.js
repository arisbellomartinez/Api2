// Import necessary modules
const { Router } =require("express");
const { signIn,signUp } = require("../controlles/auth.controller.js");

// Create an Express router instance
const routers = Router();

// Route to handle user sign in
routers.post("/signin", signIn);

// Route to handle user sign up
routers.post("/signup", signUp);

// Export the router for use in other parts of the application
module.exports= routers;
