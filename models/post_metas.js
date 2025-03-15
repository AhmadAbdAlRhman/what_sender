const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Post = require('./Posts');

const PostMeta = sequelize.define('post_metas', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: Post,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'postmetas'
});
module.exports = PostMeta;