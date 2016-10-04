var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('build:js', function() {
  return gulp.src(paths.js)
    .pipe($.filter(['*.js', '!vendor.js']))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.concat('app.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build:css', function() {
  return gulp.src(paths.sassSrc)
    .pipe($.sass({errLogToConsole: true}).on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe($.if(!isProd, gulp.dest('./dist/css')))
    .pipe($.concat('all.css'))
    .pipe($.cssnano())
    .pipe(gulp.dest(paths.sassBuild));
});