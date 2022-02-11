const express = require('express');
const morgan = require('morgan');

const reminderRoute = require('./routes/reminder');
const db = require('./utils/database');
const connection = require('./utils/connection');
require('dotenv').config();

// db connection
connection();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET',
        'POST',
        'DELETE',
        'PATCH'
    );
    next();
});
app.use(morgan('dev'));
app.use('/reminders', reminderRoute);

// listen on incoming requests
(async () => {
    try {
        await db.sync({ force: false });
        const port = process.env.PORT || 3003;
        app.listen(port, () =>
            console.log(`App running on port:${process.env.PORT}`)
        );
    } catch (err) {
        console.error(err);
    }
})();
