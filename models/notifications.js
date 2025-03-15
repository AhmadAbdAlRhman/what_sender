const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');

const Notifications = sequelize.define('notifications', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
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
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    comment: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    url: {
        type: Sequelize.STRING,
        allowNull: true
    },
    seen: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    is_admin: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'notifications',
    timestamps: true
});
module.exports = Notifications;