const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const PersonalAccessToken = sequelize.define('personal_access_tokens', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    tokenable_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tokenable_id: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    token: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true
    },
    abilities: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    last_used_at: {
        type: Sequelize.DATE,
        allowNull: true
    },
    expires_at: {
        type: Sequelize.DATE,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: 'personal_access_tokens'
});
module.exports = PersonalAccessToken;