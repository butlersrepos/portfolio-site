var gulp = require( 'gulp' );
var mainBowerFiles = require( 'main-bower-files' );
var $ = require( 'gulp-load-plugins' )();

gulp.task( 'build:js', function() {
	gulp.src( paths.js )
		.pipe( $.filter( ['*.js', '!vendor.js'] ) )
		.pipe( $.jshint() )
		.pipe( $.jshint.reporter( 'jshint-stylish' ) )
		.pipe( $.concat( 'app.js' ) )
		.pipe( $.uglify() )
		.pipe( gulp.dest( './public/js' ) );
	return gulp.src( mainBowerFiles( {
		debugging: true,
		main     : "*min.js"
	} ) )
		.pipe( $.concat( 'vendor.js' ) )
		.pipe( gulp.dest( './public/js/' ) );
} );

gulp.task( 'build:css', function() {
	return gulp.src( paths.sassSrc )
		.pipe( $.sourcemaps.init() )
		.pipe( $.sass( { errLogToConsole: true } ) )
		.pipe( $.sourcemaps.write() )
		.pipe( $.if( !isProd, gulp.dest( './public/css' ) ) )
		.pipe( $.concat( 'all.css' ) )
		.pipe( gulp.dest( paths.sassBuild ) );
} );