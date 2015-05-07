var  	gulp = require ('gulp')
	uglify = require('gulp-uglify')
	sass = require('gulp-ruby-sass')
	plumber = require('gulp-plumber')
	// livereload = require('gulp-livereload')
	concat = require('gulp-concat')
	imagemin = require('gulp-imagemin')
	// connect = require('gulp-connect')
	// server = require('gulp-server-livereload')
	autoprefixer = require('gulp-autoprefixer');

// Minification of Javascript file
// Uglifies 
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(plumber() )
	.pipe(uglify()) /*uglify*/
	.pipe(gulp.dest('build/js'))
	// .pipe(livereload());
	
	// .pipe(connect.reload());
});

// Watch task
/*Looks for a change */
gulp.task('watch', function(){ /*this is a build in watch method*/
	// var server = livereload();
	// livereload.listen();
	gulp.watch('js/*.js',  ['scripts']); /*watch the path and do scripts task*/ 
	gulp.watch('sass/*.scss',  ['styles']);
	gulp.watch('./', ['webserver']);
	 // gulp.watch(['./'], ['html']);
});

// SASS styles
/*gulp.task('styles', function(){
	gulp.src('sass/*.scss') look for a particular directory. And grab all the scss files inside the folder
	.pipe(sass())
	.pipe(gulp.dest('css/'));
});*/

// /*/*/*/*gulp.task('styles', function() {
//   gulp.src('./sass/*.scss')
//       .pipe(sass()) /*sass call*/
//       .pipe(concat('style.css')) // this is what was missing
//       .pipe(gulp.dest('./')); // output to theme root
// });*/*/*/*/

gulp.task('styles', function() {
    return sass('sass/', {
	     style: 'expanded' 
	 })
    		.pipe( plumber() )
	    	.pipe(concat('style.css'))
	       	.pipe(gulp.dest('./'))
	       	// .pipe(livereload());
	    	// .pipe(connect.reload());
});

/*Livereload*/
// gulp.task('html', function () {
//   gulp.src('./')
//     .pipe(connect.reload());
// });

// gulp.task('connect', function() {
//   connect.server({
//     root: 'localhost',
//     livereload: true
//   });
// });

// gulp.task('webserver', function() {
//   gulp.src('./')
//     .pipe(server({
//       livereload: true,
//       directoryListing: true,
//       open: true
//     }));
// });

gulp.task('default', ['scripts',  'styles', 'watch', /*'webserver'*/]);