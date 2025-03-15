const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users.js');

const DeviceOrder = sequelize.define('device_orders', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    trx: {
        type: Sequelize.STRING,
        allowNull: true
    },
    amount: {
        type: Sequelize.DOUBLE,
        allowNull: true
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
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'pending'
    }
}, {
    tableName: 'device_orders',
    timestamps: true
});
module.exports = DeviceOrder;