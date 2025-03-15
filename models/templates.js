const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');

const Templates = sequelize.define('templates', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    timestamps: true,
    tableName: 'templates'
});
module.exports = Templates;