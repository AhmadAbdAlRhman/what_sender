const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Roles = sequelize.define('roles', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    guard_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'roles'
});
module.exports = Roles;