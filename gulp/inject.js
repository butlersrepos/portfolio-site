var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();

gulp.task( 'inject:js', ['build:js'], function() {
	var sources = gulp.src( paths.js, {read: false} )
		.pipe( $.if( isProd,
			$.filter( ['app.js', '!vendor.js'] ),
			$.filter( ['*.*js', '!app.js', '!vendor.js'] ) ) );
	return gulp.src( './views/home.ejs' )
		.pipe( $.inject( sources, {ignorePath: '/public'} ) )
		.pipe( gulp.dest( './views' ) );
} );

gulp.task( 'inject:css', ['build:css'], function() {
	var sources = gulp.src( paths.css, {read: false} )
		.pipe( $.if( isProd,
			$.filter( ['all.css'] ),
			$.filter( ['*.css', '!all.css'] ) ) );
	return gulp.src( './views/home.ejs' )
		.pipe( $.inject( sources, {ignorePath: '/public'} ) )
		.pipe( gulp.dest( './views' ) );
} );