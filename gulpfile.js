var gulp = require( 'gulp' );
var browserSync = require( 'browser-sync' );
var del = require( 'del' );
var $ = require( 'gulp-load-plugins' )();
require( 'require-dir' )( './gulp' );

BROWSER_SYNC_RELOAD_DELAY = 500;
isProd = false;
paths = {
	sassSrc  : ['./private/scss/[^_]*.scss'],
	sassAll  : ['./private/scss/**/*.scss'],
	sassBuild: './public/css',
	js       : ['./public/js/*.js'],
	css      : ['./public/css/*.css']
};

////////////////////////////////////
// TASKS
////////////////////////////////////
gulp.task( 'clean', function() {
	del( './public/js/vendor.js' );
	del( './public/css/*.*' );
} );

gulp.task( 'devmode', ['build:css', 'build:js', 'nodemon'], function() {
	// Watch our sass styles
	gulp.watch( paths.sassAll, ['inject:css'] );
	// Check our JS
	gulp.watch( ['./public/js/*.js', '!vendor.js', '!app.js'], ['inject:js'] );
	// Start up browser-sync and nodemon for total-reloading
	browserSync.init( {
		files  : ['./public/**/*.*', './views/**/*.ejs'],
		proxy  : 'http://localhost/',
		port   : 8000,
		browser: ['google chrome']
	} );
} );

gulp.task( 'deploy', function() {
	isProd = true;
} );