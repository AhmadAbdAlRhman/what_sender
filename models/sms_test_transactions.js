const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');
const Devices = require('./devices');
const App = require('./app');

const SmsTestTransactions = sequelize.define('sms_test_transactions', {
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
    app_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: App, // The table name for apps
            key: 'id',
        },
        onDelete: 'SET NULL', // equivalent to nullOnDelete
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
    phone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    charge: {
        type: Sequelize.DOUBLE,
        allowNull: true,
    },
    messaging_id: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    status_code: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'sms_test_transactions',
    timestamps: true,
});
module.exports = SmsTestTransactions;