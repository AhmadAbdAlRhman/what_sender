const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Permission =require('./permission');
const Role = require('./role');

const RoleHasPermissions = sequelize.define('role_has_permissions', {
    permission_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: Permission,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    role_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: Role,
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
}, {
    timestamps: false,
    tableName: 'role_has_permissions'
});
module.exports = RoleHasPermissions;