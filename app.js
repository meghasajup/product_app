const express = require('express')
const app = new express();
const routes = require('./routes')
const morgan = require('morgan')

require('dotenv').config();
require('./db')
const PORT = process.env.PORT || 4528;

app.use(morgan('dev'))
app.use('/',routes)

app.listen(PORT, () => {
    console.log('serving on port: ' + PORT);
}) 