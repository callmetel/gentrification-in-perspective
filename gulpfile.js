/// ////////////////////////////////////////
/// Required
/// ///////////////////////////////////////


var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');




/// ////////////////////////////////////////
/// Scripts Tasks
/// ///////////////////////////////////////

gulp.task('scripts', function(){
	gulp.src(['app/js/lib/**/*.js', '!app/js/lib/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/'))
    .pipe(reload({stream:true}));
});




/// ////////////////////////////////////////
/// Sass Tasks
/// ///////////////////////////////////////

gulp.task('sass', function () {
  gulp.src('app/scss/**/*.scss')
  	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));
});


/// ////////////////////////////////////////
/// Sourcemap Tasks
/// ///////////////////////////////////////

gulp.task('sourcemaps', function () {
  gulp.src('app/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest('app/css'))
  .pipe(reload({stream:true}));
});




/// ////////////////////////////////////////
/// HTML Tasks
/// ///////////////////////////////////////

gulp.task('html', function(){
	gulp.src('app/html/**/*.html')
	.pipe(reload({stream:true}));
});



/// ////////////////////////////////////////
/// Browser-Sync Tasks
/// ///////////////////////////////////////

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: "app",
			directory: true
		}
	});
});




/// ////////////////////////////////////////
/// Watch Tasks
/// ///////////////////////////////////////

gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch(['app/scss/**/*.scss', 'app/css/**/*.css'], ['sass']);
	gulp.watch('app/css/maps/**/*.map', ['sourcemaps']);
	gulp.watch('app/html/**/*.html', ['html']);
})



/// ////////////////////////////////////////
/// Default Tasks
/// ///////////////////////////////////////

gulp.task('default', ['scripts', 'html', 'sass', 'sourcemaps', 'watch', 'browser-sync']);



