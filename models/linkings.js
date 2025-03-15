const sequelize = require('../config/db.js');

sequelize
    .sync({
        force: false
    })
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
require('./users.js');
require('./abandoned_carts.js');
require('./devices.js');
require('./app.js');
require('./categories.js');
require('./categorymetas.js');
require('./contacts');
require('./customers.js');
require('./deviceorders.js');
require('./failed_job.js');
require('./gateway.js');
require('./group.js');
require('./group_contact.js');
require('./jobs.js');
require('./menus.js');
require('./permission.js');
require('./model_has_permissions.js');
require('./notification_types.js');
require('./notifications.js');
require('./options.js');
require('./plans.js');
require('./orders.js');
require('./password_resets.js');
require('./personal_access_tokens.js');
require('./Posts.js');
require('./post_categories.js');
require('./post_metas.js');
require('./templates.js');
require('./replies.js');
require('./role.js');
require('./role_has_permissions.js');
require('./salla_events.js');
require('./salla_settings.js');
require('./schedule_messages.js');
require('./schedule_contacts.js');
require('./services.js');
require('./sms_test_transactions.js');
require('./sms_transactions.js');
require('./supports.js');
require('./support_logs.js');
require('./user_notification_settings.js');
require('./webhook.js');
require('./webhook_calls.js');