var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');
var morgan = require('morgan');

// security
app.disable('x-powered-by');

// configure app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Header', 'X-Requested-With, content-type, Authorization');
  next();
});

// log all requests to console
app.use(morgan('dev'));

// define the view engine
app.set('view engine', 'jade');

// path to public assets
app.use(express.static('public'));

// start basicRouter------------------------------------------------------
// basic routes
var basicRoutes = require('./app/routes/basic')(app, express);
app.use('/', basicRoutes);
// end basicRouter------------------------------------------------------

app.listen(config.port);
console.log(config.port +' is the port of no return...');
