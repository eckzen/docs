var  	gulp = require ('gulp')
	uglify = require('gulp-uglify')
	//sass = require('gulp-ruby-sass')
	sass = require('gulp-sass')
	plumber = require('gulp-plumber')
	concat = require('gulp-concat')
	imagemin = require('gulp-imagemin')
	prefix = require('gulp-autoprefixer');

// Minification of Javascript file
// Uglifies 
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(plumber() )
	.pipe(uglify()) /*uglify*/
	.pipe(gulp.dest('build/js'))
	
});

// // Sass styling
// gulp.task('styles', function() {
//     return sass('./sass/', {
// 	     style: 'expanded' 
// 	 })
//     		.pipe( plumber() )
//     		.pipe(prefix('last 2 versions'))
// 	    	.pipe(concat('style.css'))
// 	        	.pipe(gulp.dest('./'))
	       	
// });

//Gulp SASS
gulp.task('sass', function () {
  gulp.src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe( plumber() )
	.pipe(prefix('last 2 versions'))
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/style.scss', ['sass']);
});

// Image task
gulp.task('image', function(){
	return gulp.src('images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img'));
});

// Watch task
/*Looks for a change */
gulp.task('watch', function(){ /*this is a build in watch method*/
	gulp.watch('js/*.js',  ['scripts']); /*watch the path and do scripts task*/ 
	gulp.watch('sass/*.scss',  ['sass']);
});


gulp.task('default', ['scripts',  'sass', 'image', 'watch' ]);