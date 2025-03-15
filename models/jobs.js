const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Jobs = sequelize.define('jobs', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    queue: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    payload: {
        type: Sequelize.TEXT('long'), // Equivalent to longText in MySQL
        allowNull: false,
    },
    attempts: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false,
    },
    reserved_at: {
        type: Sequelize.INTEGER.UNSIGNED, // Timestamp when the job is reserved
        allowNull: true,
    },
    available_at: {
        type: Sequelize.INTEGER.UNSIGNED, // Timestamp when the job is available for processing
        allowNull: false,
    },
}, {
    tableName: 'jobs',
    timestamps: false, // No automatic timestamp fields since created_at is manually handled
    indexes: [{
        fields: ['queue']
    }],
});
module.exports = Jobs;