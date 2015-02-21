var gulp = require( 'gulp' );
var browserSync = require( 'browser-sync' );
var $ = require( 'gulp-load-plugins' )();

gulp.task( 'nodemon', function( cb ) {
	var called = false;
	return $.nodemon( {
		// nodemon our expressjs server
		script: 'mainServer.js',
		// watch core server file(s) that require server restart on change
		watch : ['mainServer.js', './routes/index.js']
	} )
		.on( 'start', function onStart() {
			// ensure start only got called once
			if( !called ) { cb(); }
			called = true;
		} )
		.on( 'restart', function onRestart() {
			// reload connected browsers after a slight delay
			setTimeout( function reload() {
				browserSync.reload( {
					stream: false
				} );
			}, BROWSER_SYNC_RELOAD_DELAY );
		} );
} );

gulp.task( 'browser-sync', ['nodemon'], function() {
	browserSync.init( {
		files  : ['./public/**/*.*'],
		proxy  : 'http://localhost/',
		port   : 8080,
		browser: ['google chrome']
	} );
} );