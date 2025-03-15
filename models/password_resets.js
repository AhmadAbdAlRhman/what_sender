const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const PasswordResets = sequelize.define('password_resets', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: true
    }
}, {
    tableName: 'password_resets',
    timestamps: false
});
module.exports = PasswordResets;