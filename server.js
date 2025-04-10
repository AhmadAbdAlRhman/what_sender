require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors({
    origin: "http://localhost:5173", // السماح بطلبات من React فقط
    credentials: true, // السماح بإرسال الكوكيز والتوكنات
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'your-secret-key', // replace with env var in prod
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    } // set secure: true if using HTTPS
}));
require('./models/linkings');
const frontendRoutes = require('./routes/frond_end');
app.use('/', frontendRoutes);
app.listen(process.env.PORT || 3010, () => {
    console.log(`Whatsham server is runnin gon port http://localhost:${process.env.PORT}`)
});