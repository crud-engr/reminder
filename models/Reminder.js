const Sequelize = require('sequelize');
const db = require('../utils/database');

const Reminder = db.define('reminders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    user: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
    },
});

module.exports = Reminder;
