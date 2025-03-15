const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User =require('./users');
const NotificationTypes = require('./notification_types');
const UserNotificationSettings = sequelize.define('user_notification_settings', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, // Default: false (notification inactive)
        allowNull: false,
    },
    message_template: {
        type: Sequelize.TEXT,
        defaultValue: "", // Default empty string
        allowNull: false,
    },
    delay: {
        type: Sequelize.BIGINT, // Stores delay in hours
        defaultValue: 0,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: User, // The table name for users
            key: 'id',
        },
        onDelete: 'CASCADE', // Deletes related settings if the user is deleted
    },
    notification_type_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: NotificationTypes, // The table name for notification types
            key: 'id',
        },
        onDelete: 'CASCADE', // Deletes related settings if the notification type is deleted
    },
}, {
    tableName: 'user_notification_settings',
    timestamps: true,
});
module.exports = UserNotificationSettings;