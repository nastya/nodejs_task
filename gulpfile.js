var gulp = require('gulp');
var changed = require('gulp-changed');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');

gulp.task('libs', function() {
	gulp.src('libs/**/*.js')
	   .pipe(plumber())
       .pipe(changed('build'))
	   .pipe(babel({
		   presets: [
		   'es2015-node5',
		   'stage-3'
		   ]
	   }))
	   .pipe(gulp.dest('build'));
});

gulp.task('build', ['libs']);

gulp.task('test', function() {
  // place code for your default task here
});

gulp.task('watch', ['libs'], () => {
	gulp.watch('libs/**/*.js', ['libs'])
  // place code for your default task 'here
});

gulp.task('default', ['watch']);
