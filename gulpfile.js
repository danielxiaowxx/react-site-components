/**
 * Created by danielxiao on 16/1/7.
 */

var _ = require('lodash');
var path = require('path');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var runSequence = require('run-sequence');
var webpackConfig = require('./webpack.config.js');

var plugins = gulpLoadPlugins({});

// Watch Files For Changes
gulp.task('watch', function(done) {
  runSequence(['watch:js', 'watch:css'], done);
});

gulp.task('watch:js', function() {
  gulp.watch(['./src/**/*.js'], ['js']);
});

gulp.task('watch:css', function() {
  gulp.watch(['./src/**/*.less'], ['css']);
});

// css task
gulp.task('css', function() {
  var processors = [
    require('autoprefixer')({browsers: ['last 2 version']})
  ];

  // 提供less源码
  gulp.src('./src/**/style.less')
    //.pipe(plugins.if(function(file) {
    //  return file.path.substr(file.path.indexOf("/src/")).split('/').length === 4; // 父部件
    //}, gulp.dest('./lib/')))
    .pipe(plugins.rename(function(file) {
      file.basename = _.chain(file.dirname.replace(/\|\//g, '-')).camelCase().capitalize().value();
      file.dirname = path.join('.', _.kebabCase(file.basename));
    }))
    .pipe(gulp.dest('./lib/'));

  return gulp.src('./src/**/style.less')
    .pipe(plugins.rename(function(file) {
      file.basename = _.chain(file.dirname.replace(/\|\//g, '-')).camelCase().capitalize().value();
      file.dirname = path.join('.', _.kebabCase(file.basename));
    }))
    .pipe(plugins.replace(/^/, '@bootstrapPath: "node_modules/bootstrap";')) // 依赖于bootstrap的less源文件
    .pipe(plugins.less())
    .pipe(plugins.postcss(processors))
    .pipe(gulp.dest('./lib/'))
    .pipe(plugins.connect.reload());
});

// js task
gulp.task('js', function() {
  return gulp.src(webpackConfig.context + '/**/*.js')
    .pipe(plugins.webpack(webpackConfig))
    .pipe(plugins.rename(function(file) {
      file.dirname = path.join('.', _.kebabCase(file.basename));
    }))
    .pipe(gulp.dest(webpackConfig.output.path))
    .pipe(plugins.connect.reload());
});

gulp.task('server', function(done) {
  plugins.connect.server({
    root      : '.',
    port      : 8080,
    livereload: {
      port: 35739
    }
  });
});

gulp.task('build', function(done) {
  runSequence('js', 'css', done);
});

// Run the project in development mode
gulp.task('default', function(done) {
  runSequence('build', ['server', 'watch'], done);
});