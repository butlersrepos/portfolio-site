var gulp = require('gulp');
var browserSync = require('browser-sync');
var del = require('del');
require('require-dir')('./gulp');

BROWSER_SYNC_RELOAD_DELAY = 500;
isProd = false;

paths = {
  sassSrc: ['./src/scss/[^_]*.scss'],
  sassAll: ['./src/scss/**/*.scss'],
  sassBuild: './dist/css',
  js: ['./dist/js/*.js'],
  css: ['./dist/css/*.css']
};

////////////////////////////////////
// TASKS
////////////////////////////////////
gulp.task('clean', function() {
  del('./dist/js/vendor.js');
  del('./dist/css/*.*');
});

gulp.task('devmode', ['build:css', 'nodemon'], function() {
  // Start up browser-sync and nodemon for total-reloading
  browserSync.init({
    files: ['./dist/**/*.*', './views/**/*.ejs', './views/**/*.jade'],
    proxy: 'http://localhost/',
    port: 3000,
    browser: ['google chrome']
  });
});

gulp.task('deploy', function() {
  isProd = true;
  gulp.start('inject:css');
});