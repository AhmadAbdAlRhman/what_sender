const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const ScheduleMessages = require('./schedule_messages');
const conacts = require('./contacts');

const ScheduleContacts = sequelize.define('schedule_contacts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    contact_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
            model: conacts, // The table name for contacts
            key: 'id',
        },
        onDelete: 'CASCADE', // equivalent to cascadeOnDelete
    },
    schedulemessage_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: ScheduleMessages, // The table name for schedulemessages
            key: 'id',
        },
        onDelete: 'CASCADE', // equivalent to cascadeOnDelete
    },
    status_code: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: false,
    tableName: 'schedule_contacts'
});
module.exports = ScheduleContacts;