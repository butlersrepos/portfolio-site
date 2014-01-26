/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var ejs = require('ejs'); 
ejs.open = '{{'; ejs.close = '}}';

var app = express();

// all environments
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/////////////////////
// Routing Mappers //
/////////////////////
app.get('/', routes.start);
app.get('/start*', routes.start);
app.get('/home', routes.home);
app.get('/aboutMe.action', routes.aboutMe);
app.get('/resume.action', routes.resume);
app.get('/examples.action', routes.examples);
app.get('/recreations.action', routes.recreations);

// Startup Server!
http.createServer(app).listen(app.get('port'), function(){
  console.log('Main Server listening on port ' + app.get('port'));
});
