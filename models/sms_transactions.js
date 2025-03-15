const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');
const Devices = require('./devices');
const Templates = require('./templates');
const App = require('./app');

const SmsTransactions = sequelize.define('sms_transactions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: User, // The table name for users
            key: 'id',
        },
        onDelete: 'CASCADE', // equivalent to cascadeOnDelete
    },
    device_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Devices, // The table name for devices
            key: 'id',
        },
        onDelete: 'SET NULL', // equivalent to nullOnDelete
    },
    app_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: App, // The table name for apps
            key: 'id',
        },
        onDelete: 'SET NULL', // equivalent to nullOnDelete
    },
    template_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: Templates, // The table name for templates
            key: 'id',
        },
        onDelete: 'SET NULL', // equivalent to nullOnDelete
    },
    from: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    to: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    type: {
        type: Sequelize.STRING,
        defaultValue: 'from_api',
        allowNull: true,
    },
}, {
    tableName: 'sms_transactions',
    timestamps: true,
});
module.exports = SmsTransactions;