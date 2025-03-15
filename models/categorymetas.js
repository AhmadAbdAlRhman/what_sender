const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Category = require('./categories');

const Categorymetas = sequelize.define('categorymetas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'plans'
});
module.exports = Categorymetas;