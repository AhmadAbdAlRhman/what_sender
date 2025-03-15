const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Permission =require('./permission');

const ModelHasPermissions = sequelize.define('model_has_permissions', {
    permission_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: Permission,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    model_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    model_morph_key: {
        type: Sequelize.BIGINT,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'model_has_permissions'
});
module.exports = ModelHasPermissions;