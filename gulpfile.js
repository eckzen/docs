var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
// var sass = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');



gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['sass']); /*Glob SASS*/
});


gulp.task('sass', function () {
    return sass('sass', {sourcemap: true})
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write())
        // .pipe(concat('./style.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['watch','sass']);
