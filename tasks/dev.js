import gulp from 'gulp';
import connect from 'gulp-connect';
import config from '../config';

function server() {
  return connect.server({
    ...config.connect,
    root: config.esdoc.destination,
  });
}

function livereload() {
  return gulp.watch(config.dist, () => gulp.src(config.dist).pipe(connect.reload()));
}

function watch() {
  return gulp.watch(config.src, gulp.series('build', 'typing', 'doc'));
}

gulp.task('dev', gulp.series('default', gulp.parallel(server, watch, livereload)));
