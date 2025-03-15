const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const SallaEvents = sequelize.define('salla_events', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    event: {
        type: Sequelize.STRING,
        allowNull: false
    },
    merchant: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'salla_events'
});
module.exports = SallaEvents;