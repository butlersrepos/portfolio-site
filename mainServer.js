/// <reference path="typings/node/node.d.ts"/>
var express = require( 'express' );
var routes = require( './routes/index' );
var http = require( 'http' );
var https = require( 'https' );
var path = require( 'path' );
var moment = require( 'moment' );
var engines = require( 'consolidate' );

// Setup EJS wit handlebars like syntax
var app = express();

app.engine( 'jade', engines.jade );
app.engine( 'ejs', require('ejs').renderFile );

// all environments
app.set( 'port', 80 );
app.set( 'views', path.join( __dirname, 'views' ) );
app.use( require( 'serve-favicon' )( __dirname + '/public/img/favicon.ico' ) );
app.use( require( 'body-parser' ).json() );
app.use( require( 'body-parser' ).urlencoded( { extended: false } ) );
app.use( require( 'morgan' )( 'dev' ) );
app.use( express.static( path.join( __dirname, 'public' ) ) );

// development only
if( 'development' == app.get( 'env' ) ) {
	app.use( require( 'errorhandler' )() );
}

/////////////////////
// Routing Mappers //
/////////////use////////
app.use( '/', routes );

var bitbucketAuth = 'Basic U2Fyb3BoeW06a3B4bGlsb3RhY29uMTAzNA==';
var repoUpdateInHours = 12;

// Startup Server!app
http.createServer( app ).listen( app.get( 'port' ), function() {
	// We are live!
	console.log( 'Main Server listening on port ' + app.get( 'port' ) );
	// One time tasks for new server boot
	runStartupTasks();
	// Reoccuring tasks
	setInterval( function() {
		global.bitbucket_repos = [];
		global.github_repos = [];
		getGithubReposInfo();
		getBitbucketReposInfo();
		global.repos_updated_last = new moment();
	}, 1000 * 60 * 60 * repoUpdateInHours );
} );

function runStartupTasks() {
	global.bitbucket_repos = [];
	global.github_repos = [];
	global.repos_updated_last = new moment();
	getGithubReposInfo();
	getBitbucketReposInfo();
};

function getBitbucketReposInfo() {
	// Go get newest bitbucket info for Sarophym account
	getBitbucketPage( 1 );
};

function getBitbucketPage( page ) {
	var bitbucketRequest = https.request( {
		host   : "bitbucket.org",
		method : 'GET',
		path   : "/api/2.0/repositories/Sarophym?page=" + page,
		headers: {
			Authorization: bitbucketAuth
		}
	}, function( res ) {
		var totalMessage = '';
		res.on( 'data', function( chunk ) {
			totalMessage += chunk;
		} );
		res.on( 'end', function() {
			var body = JSON.parse( totalMessage );
			if( global.bitbucket_repos === undefined ) { global.bitbucket_repos = []; }
			global.bitbucket_repos = global.bitbucket_repos.concat( body.values );
			if( body.next !== undefined ) {
				getBitbucketPage( ++page );
			}
		} )
	} );
	bitbucketRequest.on( 'error', function( e ) {
		console.log( "Bitbucket errored: " + e.message );
	} );
	bitbucketRequest.end();
};

function getGithubReposInfo() {
	var githubRequest = https.request( {
		host   : "api.github.com",
		method : 'GET',
		path   : "/users/butlersrepos/repos",
		headers: {
			'Accept'    : 'application/vnd.github.v3+json',
			'User-Agent': 'butlersrepos'
		}
	}, function( res ) {
		var totalMessage = '';
		res.on( 'data', function( chunk ) {
			totalMessage += chunk;
		} );
		res.on( 'end', function() {
			global.github_repos = JSON.parse( totalMessage );
		} )
	} );
	githubRequest.on( 'error', function( e ) {
		console.log( "Github errored: " + e.message );
	} );
	githubRequest.end();
};
