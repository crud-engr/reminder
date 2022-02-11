const reminderModel = require('../models/Reminder');

class ReminderService {
    /**
     * POST /reminders
     * @body { body, description }
     */
    async createReminder(req, res, next) {
        try {
            const { user, description } = req.body;
            const reminder = await reminderModel.create({ user, description });
            return res.status(201).json({
                status: 'success',
                data: { reminder },
                code: 201,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'an error occur',
                code: 500,
            });
        }
    }

    /**
     * GET /reminder/:id
     * @params { id }
     */
    async getReminder(req, res, next) {
        try {
            const reminder = await reminderModel.findByPk(req.params.id);
            if (!reminder)
                return res.status(404).json({
                    status: 'fail',
                    message: 'reminder not found',
                    code: 404,
                });
            return res.status(200).json({
                status: 'success',
                data: { reminder },
                code: 200,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'an error occur',
                code: 500,
            });
        }
    }

    /**
     * GET /reminders
     */
    async getReminders(req, res, next) {
        try {
            const allReminders = await reminderModel.findAll();
            return res.status(200).json({
                status: 'success',
                data: { allReminders },
                code: 200,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'an error occur',
                code: 500,
            });
        }
    }

    /**
     * PATCH /reminder/:id
     * @params { id }
     */
    async updateReminder(req, res, next) {
        try {
            const reminder = await reminderModel.update(req.body, {
                where: { id: req.params.id },
            });
            return res.status(405).json({
                status: 'success',
                message: 'reminder updated',
                data: { reminder },
                code: 405,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'an error occur',
                code: 500,
            });
        }
    }

    /**
     * DELETE /reminder/:id
     * @params { id }
     */
    async deleteReminder(req, res, next) {
        try {
            const reminder = await reminderModel.destroy({
                where: { id: req.params.id },
            });
            if (!reminder)
                return res.status(405).json({
                    status: 'fail',
                    message: 'reminder not found',
                    code: 405,
                });
            return res.status(200).json({
                status: 'success',
                message: 'reminder deleted',
                data: null,
                code: 200,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'an error occur',
                code: 500,
            });
        }
    }
}

module.exports = ReminderService;
