const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const FailedJob = sequelize.define('failed_jobs', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    connection: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    queue: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    payload: {
        type: Sequelize.TEXT('long'),
        allowNull: false
    },
    exception: {
        type: Sequelize.TEXT('long'),
        allowNull: false
    },
    failed_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'failed_jobs',
    timestamps: false
});
module.exports = FailedJob;