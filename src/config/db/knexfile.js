const path = require('path'); // Importa el módulo 'path'
const { DB_DATABASE, DB_HOST, DB_PASS, DB_USER } = require("../config.js"); // Importa las variables de configuración

const knexConfig = {

  development: {
    client: 'mysql2',
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASS,
      database: DB_DATABASE
    },
    pool:{
      min:2,
      max:10
    },
    migrations:{
      tableName:"knex_migrations",
    }
  },

};

module.exports = knexConfig; // Exporta la configuración de Knex