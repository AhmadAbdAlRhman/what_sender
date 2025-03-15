const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users.js'); // Import the User model

const AbandonedCarts = sequelize.define('abandoned_carts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: User, // Assuming you have a 'users' table
            key: "id",
        },
        onDelete: 'CASCADE',
    },
    checkout_url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    customer_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    customer_phone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    cart_total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    source: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'salla',
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'not_sent',
    },
    sent_at: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    cart_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updated: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    tableName: 'abandoned_carts', // Ensure the table name matches your database
    timestamps: true, // Sequelize will automatically manage `createdAt` and `updatedAt`
});
module.exports = AbandonedCarts;