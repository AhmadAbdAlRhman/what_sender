const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Posts = sequelize.define('posts', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
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
        allowNull: false,
        defaultValue: 'blog'
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    featured: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    lang: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'en'
    }
}, {
    timestamps: true,
    tableName: 'posts'
});
module.exports = Posts;