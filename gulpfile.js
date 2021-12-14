// import local npm modules
const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', () => {
  return gulp.src('./scss/*.scss')
  .pipe(concat('custom.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/'));
});

const defaultTask = (cb) => {
  cb();
};

exports.default = defaultTask;