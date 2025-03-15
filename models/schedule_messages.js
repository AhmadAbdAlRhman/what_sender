const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User =require('./users');
const Devices = require('./devices');
const Templates = require('./templates');

const ScheduleMessages = sequelize.define('schedule_messages', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: User, // Name of the Users table
            key: 'id',
        },
        onDelete: 'CASCADE', // equivalent to cascadeOnDelete
    },
    device_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Devices, // Name of the Devices table
            key: 'id',
        },
        onDelete: 'SET NULL', // equivalent to nullOnDelete
    },
    template_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: Templates, // Name of the Templates table
            key: 'id',
        },
        onDelete: 'SET NULL', // equivalent to nullOnDelete
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    schedule_at: {
        type: Sequelize.DATE, // Sequelize supports timezone-aware dates, so this can be used for `dateTimeTz`
        allowNull: true,
    },
    zone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
    },
    time: {
        type: Sequelize.DATEONLY,
        allowNull: true,
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'pending',
    },
}, {
    timestamps: true,
    tableName: 'schedule_messages'
});
module.exports = ScheduleMessages;