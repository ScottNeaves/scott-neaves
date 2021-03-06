'use strict';

var gulp = require('gulp'),
  bb = require('bitballoon'),
  env = require('dotenv').config(),
  browserSync = require('browser-sync').create(),
  run = require('gulp-run');;

gulp.task('build', [], function() {
  return run('./../bin/simple-website').exec()
});

gulp.task('deploy', function() {
  bb.deploy({
    access_token: process.env.BB_ACCESS_TOKEN,
    site_id: "stenographer-leap-54855.bitballoon.com/",
    dir: "site"
  }, function(err, deploy) {
    if (err) {
      throw (err)
    }
  });
});

gulp.task('serve', function() {
  browserSync.init({
    files: "site/**",
    server: {
      baseDir: "site"
    }
  });
  gulp.watch('**/*', ['build']);
});
