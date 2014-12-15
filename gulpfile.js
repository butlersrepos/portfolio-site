var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var debug = require( 'gulp-debug' );

var paths = {
	sassSrc  : ['./private/scss/[^_]*.scss'],
	sassAll  : ['./private/scss/**/*.scss'],
	sassBuild: './public/css'
};

gulp.task( 'build:sass', function() {
	gulp.src( paths.sassSrc )
		.pipe( sass() )
		.pipe( gulp.dest( paths.sassBuild ) );
} );

gulp.task( 'dev:watch', function() {
	gulp.watch( paths.sassAll, ['build:sass'] );
} );

gulp.task( 'deploy', ['build:sass'], function() {

} );