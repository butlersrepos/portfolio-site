var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var streamSeries = require( 'stream-series' );

gulp.task( 'inject:js', ['build:js'], function() {
	var vendorStream = gulp.src( './public/js/vendor.js', { read: false } );
	var othersStream = gulp.src( './public/js/*.js', { read: false } )
		.pipe( $.filter( ['*.js', '!vendor.js', '!app.js'] ) );

	var sources = streamSeries( vendorStream, othersStream );

	if( isProd ) {
		var appStream = gulp.src( './public/js/app.js', { read: false } );
		sources = appStream;
	}

	return gulp.src( './views/home.jade' )
		.pipe( $.inject( sources, { ignorePath: '/public' } ) )
		.pipe( gulp.dest( './views' ) );
} );

gulp.task( 'inject:css', ['build:css'], function() {
	var sources = gulp.src( paths.css, { read: false } )
		.pipe( $.if( isProd,
			$.filter( ['all.css'] ),
			$.filter( ['*.css', '!all.css'] ) ) );

	return gulp.src( './views/home.jade' )
		.pipe( $.inject( sources, { ignorePath: '/public' } ) )
		.pipe( gulp.dest( './views' ) );
} );