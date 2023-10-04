const { NotificationMessages } = require('../models/index');
const { Op } = require('sequelize');

class MessageRepository {

    async getAll() {
        try {
            const notifications = await NotificationMessages.findAll();
            return notifications;
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const ticket = await NotificationMessages.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async get(filter) {
        
    }

}