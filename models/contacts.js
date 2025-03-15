const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users.js');

const Contacts = sequelize.define('contacts', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
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
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    tableName: 'contacts',
    timestamps: true
});
module.exports = Contacts;