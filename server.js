var gzippo = require('gzippo');
var express = require('express');
var app = express();

// Create our app::
var app = express();
const PORT = process.env.PORT || 5000;

app.use(function(request, response, next){
	//This header doesnt exists locally, is only for Heroku::
	if (request.headers['x-forwarded-proto'] === 'https'){
		response.redirect("http://" + request.hostname + request.url);
	}else{
		next();
	}
});

//app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.listen(PORT, function(){
  console.log("Express server is up on " + PORT + " port.");
});
