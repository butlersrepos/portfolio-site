/**
	These are mapped the the routes object in mainServer.js
	This is the eqivalent of a Controller class in a typical Spring-Java setup.
**/

// MySQL connection setup
var mysql = require('mysql');
var connection = mysql.createConnection('mysql://ebiUser:bung2020@54.243.177.112/PORTFOLIO_SITE?reconnect=true');
connection.connect();

/* GET index page. */
exports.index = function(req, res){
  res.render('index.ejs', { title: 'Express' });
};

/* GET home page. */
exports.home = function(req, res){
	var d = new Date();
	res.render('home.ejs', { time: d });
};

/* Main Start Page */
exports.start = function(req, res) {
	console.log('Starting!');
	res.render('start.ejs');
};

/* A Short AJAXed Autobiography */
exports.aboutMe = function(req, res) {
	console.log('Loading AboutMe...');
	res.render('content/aboutMe.ejs');
};

/* An AJAXed Resume */
exports.resume = function(req, res) {
	console.log('Loading Resume...');
	res.render('content/resume.ejs');
};

/* AJAXed Coding Examples */
exports.examples = function(req, res) {
	console.log('Loading Examples...');
	
	connection.query('SELECT * FROM PORTFOLIO_SITE.EXAMPLE_MESSAGES', function(err, rows, fields) {
		if( err ) throw err;
		debugger;
		
		res.render('content/examples.ejs', {records: rows});
	});
};

/* Links to stuff I do */
exports.recreations = function(req, res) {
	console.log('Loading Recreations...');
	res.render('content/recreations.ejs');
};