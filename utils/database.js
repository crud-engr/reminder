const Sequelize = require('sequelize');

const sequelize = new Sequelize('techinnover_db', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
