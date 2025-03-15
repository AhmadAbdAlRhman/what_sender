const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users.js');

const Devices = sequelize.define('devices', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // Automatically generate UUIDs
        unique: true,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: User, // Assuming you have a 'users' table
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    qr: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    meta: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    hook_url: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0, // 0 = session out, 1 = session active
    },
}, {
    tableName: 'devices', // Ensure the table name matches your database
    timestamps: true, // Sequelize will automatically manage `createdAt` and `updatedAt`
});
module.exports = Devices;