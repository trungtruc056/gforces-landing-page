// Require Gulp
var gulp = require('gulp');

//Require Gulp-Sass plugin
var sass = require('gulp-sass');
gulp.task('sass', function(){
    return gulp.src('Gforces-test/resources/sass/**/*.+(scss|sass)')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('Gforces-test/resources/css'))
      .pipe(browserSync.reload({
          stream: true
      }))
});

gulp.task('watch',['browserSync'],function(){
    gulp.watch('Gforces-test/resources/**/*.scss', ['sass']); // Gulp watch
    //Reloads the browser whenever CSS, HTML or JS file
    gulp.watch('Gforces-test/*.html', browserSync.reload); 
    gulp.watch('Gforces-test/resources/js/**/*.js', browserSync.reload);
    gulp.watch('Gforces-test/resources/css/**/*.css', browserSync.reload);
})

// Live-reloading with Brower Sync
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'Gforces-test'
        },
    })
});

//useref file
// var useref = require('gulp-useref');
// var uglify = require('gulp-uglify');
// var gulpIf = require('gulp-if');
// var cssnano = require('gulp-cssnano');

// gulp.task('useref', function(){
//   return gulp.src('Gforces-test/*.html')
//     .pipe(useref())
//     // Minifies only if it's a JavaScript file
//     .pipe(gulpIf('*.js', uglify()))
//     // Minifies only if it's a CSS file
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('dist'))
// });