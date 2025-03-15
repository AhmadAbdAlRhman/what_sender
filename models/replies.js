const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');
const Template = require('./templates');
const Devices =require('./devices');

const Replies = sequelize.define('replies', {
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
    device_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Devices,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    template_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: Template,
            key: 'id'
        },
        onDelete: 'SET NULL'
    },
    keyword: {
        type: Sequelize.STRING,
        allowNull: true
    },
    reply: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    match_type: {
        type: Sequelize.STRING,
        defaultValue: 'equal'
    },
    reply_type: {
        type: Sequelize.STRING,
        defaultValue: 'text'
    },
    api_key: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: 'replies'
});
module.exports = Replies;