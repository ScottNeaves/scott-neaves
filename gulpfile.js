'use strict';

var gulp = require('gulp'),
    bb   = require('bitballoon'),
    env  = require('dotenv').config(),
    browserSync = require('browser-sync').create(),
    run = require('gulp-run');;

gulp.task('build', [], function() {
  return run('simple-website').exec()
});

gulp.task('deploy', function() {
  bb.deploy({
    access_token: process.env.BB_ACCESS_TOKEN,
    site_id: "stenographer-leap-54855.bitballoon.com/",
    dir: "."
  }, function(err, deploy) {
    if (err) { throw(err) }
  });
});

gulp.task('serve', function() {
    browserSync.init({
        files: "./**",
        server: {
            baseDir: "."
        }
    });
   gulp.watch('**/*', ['build']);
});
