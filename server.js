require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json())
require('./models/linkings');
app.listen(process.env.PORT || 3010, () => {
    console.log(`Whatsham server is runnin gon port http://localhost:${process.env.PORT}`)
});