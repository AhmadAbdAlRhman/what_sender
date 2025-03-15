const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users.js'); // Import User model

const Groups = sequelize.define('groups', {
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
    name: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    tableName: 'groups',
    timestamps: true    
});
module.exports = Groups