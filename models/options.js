const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Options = sequelize.define('options', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lang: {
        type: Sequelize.STRING,
        defaultValue: 'en'
    }
}, {
    tableName: 'options',
    timestamps: false
});
module.exports = Options;