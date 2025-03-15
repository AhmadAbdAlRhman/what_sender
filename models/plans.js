const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Plans = sequelize.define('plans', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    labelcolor: {
        type: Sequelize.STRING,
        allowNull: true
    },
    iconname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    is_featured: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    is_recommended: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    is_trial: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    days: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    trial_days: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    data: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: 'plans'
});
module.exports = Plans;