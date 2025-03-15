const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');

const Supports = sequelize.define('supports', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ticket_no: {
        type: Sequelize.INTEGER,
        allowNull: false, // Assuming ticket number can't be null
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: User, // The table name for users
            key: 'id',
        },
        onDelete: 'CASCADE', // equivalent to cascadeOnDelete
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 2, // Default value: 2 (pending)
        allowNull: false,
    },
}, {
    tableName: 'supports',
    timestamps: true,
});
module.exports = Supports;