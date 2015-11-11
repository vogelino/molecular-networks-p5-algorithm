var gulp = require('gulp'),
	babel = require('gulp-babel'),
	livereload = require('gulp-livereload'),
	http = require('http'),
	stylus = require('gulp-stylus'),
	sourcemaps = require('gulp-sourcemaps'),
	rimraf = require('rimraf'),
	st = require('st'),
	gutil = require('gulp-util');

function throwError(err) {
	'use strict';
	gutil.log(gutil.colors.red(err));
}

function warn(msg) {
	'use strict';
	gutil.log(gutil.colors.yellow(msg));
}

var src = './src/';
var dest = './public';
var paths = {
	scripts: [src + 'sketch.js'],
	html: [src + 'index.html'],
	stylus: [src + 'main.styl'],
	jsLibs: ['node_modules/p5/lib/p5.min.js']
};

gulp.task('clean', function(cb) {
	rimraf(dest, cb);
});

gulp.task('html', function() {
	return gulp.src(paths.html)
		.pipe(gulp.dest(dest))
		.on('error', throwError)
		.pipe(livereload());
});

gulp.task('stylus', function() {
	return gulp.src(paths.stylus)
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.on('error', throwError)
		.pipe(gulp.dest(dest))
		.pipe(livereload());
});

gulp.task('es6', function() {
	return gulp.src(paths.scripts)
		.pipe(babel({
			sourceMaps: true,
			presets: ['es2015']
		}))
		.on('error', throwError)
		.pipe(gulp.dest(dest));
});

gulp.task('libs', function() {
	return gulp.src(paths.jsLibs)
		.pipe(gulp.dest(dest + '/lib'))
		.on('error', throwError);
});

gulp.task('default',['clean', 'libs', 'es6', 'stylus', 'html'],function(done) {
	http.createServer(
		st({ index: 'index.html', cache: false, path: dest })
	).listen(8080, done);
	livereload.listen();
	gulp.watch(paths.scripts, ['es6']);
	gulp.watch(paths.stylus, ['stylus']);
	gulp.watch(paths.html, ['html']);
});