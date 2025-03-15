const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const WebhookCall = sequelize.define('webhook_calls', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    headers: {
        type: Sequelize.JSON, // Storing headers as JSON
        allowNull: true,
    },
    payload: {
        type: Sequelize.JSON, // Storing webhook payload as JSON
        allowNull: true,
    },
    exception: {
        type: Sequelize.TEXT, // Stores exception details if any
        allowNull: true,
    },
}, {
    tableName: 'webhook_calls',
    timestamps: true,
});
module.exports = WebhookCall;