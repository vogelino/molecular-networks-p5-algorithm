var gulp = require('gulp'),
	babel = require('gulp-babel'),
	livereload = require('gulp-livereload'),
	http = require('http'),
	stylus = require('gulp-stylus'),
	sourcemaps = require('gulp-sourcemaps'),
	rimraf = require('rimraf'),
	st = require('st');

var src = './src/';
var dest = './public';
var paths = {
	scripts: [src + 'sketch.js'],
	html: [src + 'index.html'],
	stylus: [src + 'main.styl']
};

gulp.task('clean', function(cb) {
	rimraf(dest, cb);
});

gulp.task('html', function() {
	return gulp.src(paths.html)
		.pipe(gulp.dest(dest))
		.pipe(livereload());
});

gulp.task('js', ['es6'], function() {
	return gulp.src(paths.scripts)
		.pipe(gulp.dest(dest))
		.pipe(livereload());
});

gulp.task('stylus', function() {
	return gulp.src(paths.stylus)
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(gulp.dest(dest))
		.pipe(livereload());
});

gulp.task('es6', function() {
	return gulp.src(paths.scripts)
		.pipe(babel({
			sourceMaps: true,
			presets: ['es2015']
		}))
		.pipe(gulp.dest(dest));
});

gulp.task('default',['clean', 'js', 'stylus', 'html'],function(done) {
	http.createServer(
		st({ index: 'index.html', cache: false, path: dest })
	).listen(8080, done);
	livereload.listen();
	gulp.watch(paths.scripts, ['js']);
	gulp.watch(paths.stylus, ['stylus']);
	gulp.watch(paths.html, ['html']);
});