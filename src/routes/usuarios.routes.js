// Import necessary modules
const express = require('express')
const getUsarios = require("../controlles/usuarios.controller.js");
const { verifyToken } = require("../middleware/authToken.js");

// Create an Express router instance
const routers = express.Router();

// Route to get all users
routers.get('/',verifyToken, getUsarios);

// Route to get user by ID
// routers.get('/:id',verifyToken, getUsuariosById);

// // Route to create a new user
// routers.post('/',verifyToken, createUsuarios);

// // Route to update user by ID using PUT
// routers.put('/:id',verifyToken, updateUsuarios);

// // Route to delete user by ID
// routers.delete('/:id',verifyToken, deleteUsuarios);

// Export the router for use in other parts of the application
module.exports = routers;
