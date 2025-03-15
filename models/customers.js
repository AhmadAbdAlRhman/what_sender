const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users.js');

const Customers = sequelize.define('customers', {
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
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: true
    },
    birth_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    source: {
        type: Sequelize.STRING,
        defaultValue: 'salla'
    },
    customer_created_at: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    tableName: 'customers',
    timestamps: true
});
module.exports = Customers;