const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Services = sequelize.define('services', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    price: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: true,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    imagePath: {
        type: Sequelize.STRING,
        allowNull: true,
    },
}, {
    tableName: 'services',
    timestamps: true,
});
module.exports = Services;