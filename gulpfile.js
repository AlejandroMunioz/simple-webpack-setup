'use strict';

var gulp = require("gulp"),
	gutil = require("gulp-util"),
	Config = require("./build/conf"),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream');

// Defaults to development enviroment
process.env.NODE_ENV = 'development';
// Allow pass the --production flag
if ( gutil.env.production ) {
	process.env.NODE_ENV = 'production';
}

// Get configuration files for enviroment
var env = new Config();

gulp.task('default', function(e) {
	return gulp.src('app.js')
		.pipe( webpackStream(env, webpack) )
		.pipe( gulp.dest('dist/js/') );
});
