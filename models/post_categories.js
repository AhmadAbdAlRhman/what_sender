const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Posts =require('./Posts');
const Categories = require ('./categories');

const PostCategory = sequelize.define('post_categories', {
    post_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: Posts,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Categories,
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
}, {
    timestamps: false,
    tableName: 'post_categories'
});
module.exports = PostCategory;