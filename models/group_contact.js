const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Group = require('./group.js');
const Contact = require('./contacts.js');

const GroupContact = sequelize.define('group_contacts', {
    group_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: Group,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    contact_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: Contact,
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'group_contacts',
    timestamps: false
});
module.exports = GroupContact;