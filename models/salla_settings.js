const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User =require('./users');

const SallaSettings = sequelize.define('salla_settings', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    access_token: {
        type: Sequelize.STRING,
        allowNull: true
    },
    refresh_token: {
        type: Sequelize.STRING,
        allowNull: true
    },
    store_id: {
        type: Sequelize.STRING,
        allowNull: true
    },
    connected: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    connected_at: {
        type: Sequelize.DATE,
        allowNull: true
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
}, {
    timestamps: true,
    tableName: 'salla_settings'
});
module.exports = SallaSettings;