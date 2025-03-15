const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');
const Support = require('./supports');

const SupportLogs = sequelize.define('support_logs', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    is_admin: {
        type: Sequelize.INTEGER,
        defaultValue: 0, // Default value: 0 (user), 1 (support admin)
        allowNull: false,
    },
    seen: {
        type: Sequelize.INTEGER,
        defaultValue: 0, // Default value: 0 (not seen), 1 (seen)
        allowNull: false,
    },
    comment: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    support_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Support, // The table name for supports
            key: 'id',
        },
        onDelete: 'CASCADE', // equivalent to cascadeOnDelete
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: User, // The table name for users
            key: 'id',
        },
        onDelete: 'CASCADE', // equivalent to cascadeOnDelete
    },
}, {
    tableName: 'supportlogs',
    timestamps: true,
});
module.exports = SupportLogs;