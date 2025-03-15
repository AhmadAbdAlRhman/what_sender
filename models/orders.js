const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Plan = require('./plans.js');
const User = require('./users.js');
const Gateway = require('./gateway');

const Orders = sequelize.define('orders', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    invoice_no: {
        type: Sequelize.STRING,
        allowNull: true
    },
    payment_id: {
        type: Sequelize.STRING,
        allowNull: true
    },
    plan_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: Plan,
            key: 'id'
        },
        onDelete: 'CASCADE'
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
    gateway_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: Gateway,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    amount: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    tax: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    will_expire: {
        type: Sequelize.DATE,
        allowNull: true
    },
    meta: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    tableName: 'orders',
    timestamps: true
});
module.exports = Orders;