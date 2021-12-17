// import local npm modules
const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

// scss build
const cssBuild = () => {
  return gulp.src('scss/*.scss')
    .pipe(concat('style.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
}

exports.default = () => {
  gulp.watch('scss/*.scss', cssBuild);
}