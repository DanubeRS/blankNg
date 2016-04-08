/// <binding BeforeBuild='preBuild' AfterBuild='postBuild' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var logger = require('gulp-logger');
var del = require('del');

gulp.task('postBuild', ['publishPublicFiles'],
    function () {
    });

gulp.task('preBuild', function () { });

gulp.task('clean',
    function() {
        del('wwwroot');
    });

gulp.task('publishPublicFiles', ['publishTemplates', 'publishAppScripts', 'publishLibs', 'publishStyles'], function() {
    gulp.src('src/index.html').pipe(gulp.dest('wwwroot'));
});

gulp.task('publishTemplates',
    function () {
        gulp.src("src/templates/**/*.html").pipe(gulp.dest('wwwroot/templates'));
    });
gulp.task('publishAppScripts', function () { gulp.src("src/app/**/*.{js,map}").pipe(gulp.dest('wwwroot/scripts/app')); });
gulp.task('publishLibs', function() {
    //Libs
    gulp.src('node_modules/angular2/bundles/angular2.dev.js').pipe(gulp.dest('wwwroot/scripts/lib'));
    gulp.src('node_modules/jquery/dist/jquery.min.js').pipe(gulp.dest('wwwroot/scripts/lib'));
    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest('wwwroot/scripts/lib'));
    gulp.src('node_modules/systemjs/dist/system.src.js').pipe(gulp.dest('wwwroot/scripts/lib'));
    gulp.src('node_modules/rxjs/bundles/Rx.js').pipe(gulp.dest('wwwroot/scripts/lib'));
//    gulp.src('./node_modules/angular2/**/*.js').pipe(gulp.dest('./public/scripts/libs/angular2'));

    //Shims
    gulp.src('./node_modules/es6-shim/es6-shim.min.js').pipe(gulp.dest("wwwroot/scripts/lib"));
    gulp.src('./node_modules/systemjs/dist/system-polyfills.js').pipe(gulp.dest('wwwroot/scripts/lib'));
    gulp.src('./node_modules/angular2/es6/dev/src/testing/shims_for_IE.js').pipe(gulp.dest('wwwroot/scripts/lib'));
    gulp.src('./node_modules/angular2/bundles/angular2-polyfills.js').pipe(gulp.dest('wwwroot/scripts/lib'));
});

gulp.task('publishStyles',
    function () {
        gulp.src("src/styles/**/*.css").pipe(gulp.dest('wwwroot/styles'));
    });
