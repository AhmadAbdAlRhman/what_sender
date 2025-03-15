const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    authkey: {
        type: Sequelize.STRING,
        allowNull: true
    },
    wallet: {
        type: Sequelize.STRING,
        allowNull: true
    },
    role: {
        type: Sequelize.STRING,
        defaultValue: 'user'
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email_verified_at: {
        type: Sequelize.DATE,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    meta: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    plan: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    plan_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    will_expire: {
        type: Sequelize.DATE,
        allowNull: true
    },
    remember_token: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: 'users'
});
module.exports = Users;