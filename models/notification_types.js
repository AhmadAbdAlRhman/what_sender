const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const NotificationType = sequelize.define('notification_types', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    params: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    delay: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'notification_types',
    timestamps: true
});
module.exports = NotificationType;