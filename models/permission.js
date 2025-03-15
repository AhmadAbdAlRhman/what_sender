const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Permission = sequelize.define('permissions', {
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
    },
    group_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'permissions'
});
module.exports = Permission;