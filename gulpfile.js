var gulp = require('gulp'),
    connect = require('gulp-webserver');


gulp.task('webserver', function() {
  gulp
    .src('.')
    .pipe(connect({
      livereload: true,
      directoryListeing: true,
      open: true
    }));
});

gulp.task('default', ['webserver']);
