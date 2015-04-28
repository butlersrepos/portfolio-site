// These are mapped the the routes object in mainServer.js
// This is the equivalent of a Controller class in a typical Spring-Java setup.

var app = require( 'express' )();
// Moment plugin for time and date parsing
var moment = require( 'moment' );

var resumeJson = require( '../private/my-resume' );

// Main Start Page
function homePage( req, res ) {
	console.log( 'Starting!' );
	res.render( 'home.ejs' );
	console.log( req.host )
};

// A Short AJAXed Autobiography
function aboutMePage( req, res ) {
	console.log( 'Loading AboutMe...' );
	res.render( 'content/aboutme.ejs' );
};

// An AJAXed Resume
function resumePage( req, res ) {
	console.log( 'Loading Resume...' );
	res.render( 'content/resume.ejs', { resume: resumeJson } );
};

// RESTful API Stuff
function getJsonResume( req, res ) {
	res.writeHead( 200, { "Content-Type": "application/json" } );
	res.end( JSON.stringify( resumeJson ) );
};

// List of github repos etc
function worksPage( req, res ) {
	res.render( 'content/works.ejs', {
		moment         : moment,
		updated_last   : global.repos_updated_last,
		github_repos   : global.github_repos,
		bitbucket_repos: global.bitbucket_repos
	} );
};

// Exposed pieces
module.exports = {
	home     : homePage,
	aboutMe  : aboutMePage,
	resume   : resumePage,
	resumeGet: getJsonResume,
	works    : worksPage
};