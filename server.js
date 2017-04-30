var gzippo = require('gzippo');
var express = require('express');
var app = express();

// Create our app::
var app = express();
const PORT = process.env.PORT || 5000;


app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.listen(PORT, function(){
  console.log("Express server is up on " + PORT + " port.");
});
