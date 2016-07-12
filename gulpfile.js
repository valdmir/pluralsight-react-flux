"use strict";

var gulp= require('gulp');
var connect=require('gulp-connect'); //Runs a local dev server
var open=require('gulp-open'); //Open A URL in a web browser
var browserify=require('browserify'); //Bundle JS
var reactify=require('reactify'); //Transform React JSX to JS
var source=require('vinyl-source-stream'); //Use conventional text stream with Gulp

var config={
  port:9005,
  devBaseUrl:"http://localhost",
  paths:{
    html:'./src/*.html',
    js: './src/**/.js'
    dist:'./dist'
  }
}
// Start a local development server
gulp.task('connect',function(){
  connect.server({
    root:['dist'],
    port:config.port,
    base:config.devBaseUrl,
    liveReload:true
  });
});
// open after connect
gulp.task('open',['connect'],function(){
  gulp.src('dist/index.html')
    .pipe(open({uri:config.devBaseUrl+":"+config.port+"/"}));
});
gulp.task('js',function(){
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error',console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config..paths.dist+"/scripts"))
    .pipe(connect.reload());
});
gulp.task('watch',function(){
  gulp.watch(config.paths.html,['html']);
  gulp.watch(config.paths.js,['js']);
});
gulp.task('html',function(){
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.dist))
  .pipe(connect.reload());
});
gulp.task('default',['html','open','watch']);
