const ReminderService = require('../services/reminder');

class ReminderController {
    async createReminder(req, res, next) {
        return new ReminderService().createReminder(req, res, next);
    }

    async getReminder(req, res, next) {
        return new ReminderService().getReminder(req, res, next);
    }

    async getReminders(req, res, next) {
        return new ReminderService().getReminders(req, res, next);
    }

    async updateReminder(req, res, next) {
        return new ReminderService().updateReminder(req, res, next);
    }

    async deleteReminder(req, res, next) {
        return new ReminderService().deleteReminder(req, res, next);
    }
}

module.exports = ReminderController;
