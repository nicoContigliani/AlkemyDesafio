var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var cors = require('cors')


var routes = require('./routes/routes');

var app = express();
app.use(cors())

app.use(morgan());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

module.exports = app;
