const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Devices = require('./devices');
const User = require('./users'); // Import the User model

const WebHook = sequelize.define('webhook', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    device_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Devices,
            key: 'id'
        },
        onDelete: 'SET NULL'
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    payload: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    hook: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 2
    },
    status_code: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: 'plans'
});
module.exports = WebHook;