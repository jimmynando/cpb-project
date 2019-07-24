var express = require('express');
var finance = require('./routes/financeRoute');
require('dotenv').config();
var bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.use('/finance', finance);

app.listen(port, () => console.log('Server is running'));

