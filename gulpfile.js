var gulp = require('gulp');
var sass = require('gulp-sass');
var debug = require('gulp-debug');

var paths = {
	sassSrc: ['./private/scss/[^_]*.scss'],
	sassBuild: './public/css'
};

gulp.task( 'build:sass', function() {
	gulp.src( paths.sassSrc )
		.pipe( sass() )
		.pipe( gulp.dest( paths.sassBuild ) );
});

gulp.task( 'deploy', ['build:sass'], function() {

});