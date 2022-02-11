const Sequelize = require('sequelize');

async function connection() {
    const sequelize = new Sequelize('techinnover_db', 'postgres', 'admin', {
        host: 'localhost',
        dialect: 'postgres',
    });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return sequelize;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = connection;
