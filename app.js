var express = require('express');
var finance = require('./controllers/financeRoute');
require('dotenv').config();

const port = process.env.PORT || 3000;

var app = express();

app.use('/finance', finance);

app.listen(port, () => console.log('Server is running'));
