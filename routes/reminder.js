const express = require('express');
const ReminderController = require('../controllers/reminder');
const router = express.Router();

router
    .route('/')
    .post(new ReminderController().createReminder)
    .get(new ReminderController().getReminders);

router
    .route('/:id')
    .get(new ReminderController().getReminder)
    .patch(new ReminderController().updateReminder)
    .delete(new ReminderController().deleteReminder);

module.exports = router;
