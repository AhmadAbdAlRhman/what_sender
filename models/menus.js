const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Menus = sequelize.define('menus', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    position: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lang: {
        type: Sequelize.STRING,
        defaultValue: 'en'
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: '1'
    }
}, {
    tableName: 'menus',
    timestamps: true
});
module.exports = Menus;