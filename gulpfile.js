var gulp = require( 'gulp' );
var mainBowerFiles = require('main-bower-files');
var del = require('del');
var $ = require('gulp-load-plugins')();

var paths = {
	sassSrc  : ['./private/scss/[^_]*.scss'],
	sassAll  : ['./private/scss/**/*.scss'],
	sassBuild: './public/css'
};

gulp.task('clean', function() {
	del( './public/js/vendor.js' );
	del( './public/css/*.*' );
});

gulp.task( 'build:js', function() {
	return gulp.src(mainBowerFiles({
							debugging: true,
							main: "*min.js"
		}))
		.pipe( $.concat('vendor.js') )
		.pipe( gulp.dest('./public/js/') );
});

gulp.task( 'build:sass', function() {
	return gulp.src( paths.sassSrc )
		.pipe( $.sass() )
		.pipe( $.sourcemaps.init() )
		.pipe( $.concat( 'all.css' ) )
		.pipe( $.sourcemaps.write() )
		.pipe( gulp.dest( paths.sassBuild ) );
} );

gulp.task( 'dev:watch', ['build:sass'], function() {
	$.livereload.listen();
	gulp.watch( paths.sassAll, ['build:sass'] );
} );

gulp.task( 'deploy', ['build:sass'], function() {

} );