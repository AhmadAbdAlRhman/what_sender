require('dotenv').config();
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
require('./models/linkings');
const frontendRoutes = require('./routes/frond_end');
app.use('/',frontendRoutes);
app.listen(process.env.PORT || 3010, () => {
    console.log(`Whatsham server is runnin gon port http://localhost:${process.env.PORT}`)
});