var gzippo = require('gzippo');
var express = require('express');
// We have to install morgan. Some of the middleware of express you have to install it separate::
var morgan = require('morgan');

// Create our app::
var app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.listen(PORT, function(){
  console.log("Express server is up on " + PORT + " port.");
});
