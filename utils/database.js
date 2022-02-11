const Sequelize = require('sequelize');

// set connection configuration
const sequelize = new Sequelize('techinnover_db', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
