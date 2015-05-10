var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var streamSeries = require('stream-series');

gulp.task( 'inject:js', ['build:js'], function() {
	var sources = gulp.src( paths.js, {read: false} )
		.pipe( $.if( isProd,
			$.filter( ['app.js', '!vendor.js'] ),
			$.filter( ['vendor.js', '*.*js', '!app.js'] ) ) );
	return gulp.src( './views/home.jade' )
		.pipe( $.inject( sources, {ignorePath: '/public'} ) )
		.pipe( gulp.dest( './views' ) );
} );

gulp.task( 'inject:css', ['build:css'], function() {
	var sources = gulp.src( paths.css, {read: false} )
		.pipe( $.if( isProd,
			$.filter( ['all.css'] ),
			$.filter( ['*.css', '!all.css'] ) ) );


	return gulp.src( './views/home.jade' )
		.pipe( $.inject( sources, {ignorePath: '/public'} ) )
		.pipe( gulp.dest( './views' ) );
} );