const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users.js'); // Import the User model
const Device = require('./devices'); // Import the Device model

const Apps = sequelize.define('apps', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    device_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Device,
            key: 'id'
        },
        onDelete: 'SET NULL'
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    website: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
}, {
    tableName: 'apps',
    timestamps: true,
});
module.exports = Apps;