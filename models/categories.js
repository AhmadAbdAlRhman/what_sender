const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Categories = sequelize.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: true
    },
    type: {
        type: Sequelize.STRING,
        defaultValue: 'category'
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    is_featured: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    lang: {
        type: Sequelize.STRING,
        defaultValue: 'en'
    }
}, {
    timestamps: true,
    tableName: 'categories'
});
module.exports = Categories;