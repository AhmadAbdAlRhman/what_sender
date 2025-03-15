const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Gateway = sequelize.define('gateway', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    currency: {
        type: Sequelize.STRING,
        allowNull: true
    },
    logo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    charge: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
    },
    multiply: {
        type: Sequelize.DOUBLE,
        defaultValue: 1.0
    },
    namespace: {
        type: Sequelize.STRING,
        allowNull: false
    },
    min_amount: {
        type: Sequelize.DOUBLE,
        defaultValue: 1
    },
    max_amount: {
        type: Sequelize.DOUBLE,
        defaultValue: 1000
    },
    is_auto: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    image_accept: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    test_mode: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    phone_required: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    data: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    comment: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    tableName: 'gateways',
    timestamps: true
});
module.exports = Gateway;