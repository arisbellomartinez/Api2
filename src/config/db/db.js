// Import necessary modules

const knex = require("knex");
const knexConfig =require("./knexfile.js");

// Define Knex configuration object


// Create a Knex instance with the configured options
const knexInstance = knex(knexConfig.development);

// Export the Knex instance for use in other parts of the application
module.exports=knexInstance;




