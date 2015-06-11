'use strict';

//
//------------------------------------------------------------------------------------------------------------
// Project : Member Landing Page (My Health Manager)
// @author : Juanyong Zhang
// File Name : gulpfile.js
// Description : Gulp Declarations begins here
//
// Gulp Design
// ├───default									??Default Gulp job, which enter developing mode
// │   ├───clean								    ??Del the builds folder and typescript lib
// │   ├───tsd									??Generate the typeDir lib (interview/app/typeDir)
// │   ├───build								    ??Build project
// │   │   ├───compile-typescript				??Compile TYPESCRIPT, concatenate, uglify if non-dev env, output to builds/js
// │   │   ├───compile-css						??Compile SASS, concatenate, minify if non-dev env, output to builds/css
// │   │   ├───build-bower-js					??Concatenate js lib, uglify if non-dev env, output to builds/js
// │   │   └───copy-assets						??Copy assets to builds folder
// │   ├───watch								    ??Watching the changing, re-compile, update the web content, and refresh the brower
// │   └───run									??Starts the local server on top of ./builds folder, http://localhost:3000
// ├───package									??Package a deployable war file(builds/interview.war), will do the minify and uglify jobs 
// │   ├───clean								
// │   ├───tsd									
// │   ├───build								
// │   │   ├───compile-typescript				
// │   │   ├───compile-css						
// │   │   ├───build-bower-js					
// │   │   └───copy-assets						
// │   └───zip									??Create dist at builds/interview.war
// │───test										??Run test once and exit(karma)
// └───tdd										??Watch for file changes and re-run tests on each change(karma, NOT tested)
// 
//------------------------------------------------------------------------------------------------------------
//
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var tsc = require('gulp-typescript');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var addsrc = require('gulp-add-src');
var cssmin = require('gulp-cssmin');
var gulpIgnore = require('gulp-ignore');
var tsd = require('gulp-tsd');
var zip = require('gulp-zip');
var runSequence = require('run-sequence');
var lazyPipe = require('lazypipe');
var del = require('del');
var neat = require('node-neat').includePaths;
var karma = require('karma').server;


var Config = require('./gulpfile.config');
var config = new Config();
var env = process.env.NODE_ENV || 'dev'

var jsDependencies = [config.bower_lib + config.angular_js_file,
    config.bower_lib + config.angular_route_js_file,
    config.bower_lib + config.angular_ui_js_file,
    config.bower_lib + config.jquery_js_file,
    config.bower_lib + config.intl_tel_js_file,
    config.bower_lib + config.international_phone_number_js_file];

var outputScripts = lazyPipe()
    .pipe(function () {
        return concat(config.all_typescript_js);
    })
    // .pipe(function(){
    // 	return browserify({debug : env === 'dev'});
    // })
    .pipe(function () {
        return gulpif(env !== 'dev', uglify());
    })
    .pipe(function () {
        return gulp.dest(config.all_typescript_js_folder);
    })
    .pipe(function () {
        return connect.reload();
    });

var outputBower = lazyPipe()
    .pipe(function () {
        return concat(config.all_bower_js);
    })
    .pipe(function () {
        return gulpif(env !== 'dev', uglify());
    })
    .pipe(function () {
        return gulp.dest(config.all_bower_js_folder);
    })
    .pipe(function () {
        return connect.reload();
    });

var outputCss = lazyPipe().pipe(function () {
    return concat(config.all_minify_css);
})
    .pipe(function () {
        return gulpif(env !== 'dev', cssmin());
    })
    .pipe(function () {
        return gulp.dest(config.all_minify_css_folder);
    })
    .pipe(function () {
        return connect.reload();
    });

//
//----------Del the builds folder and typescript lib------------------------------------------------------------------------------------
//
gulp.task('clean', function (callback) {
    var buildFiles = [config.build_dir, config.lib_typescript];
    del(buildFiles, callback);
});

//
//----------Build project-----------------------------------------
//
gulp.task('build', ['compile-typescript', 'compile-css', 'build-bower-js', 'copy-assets']);

//
//----------Generate the typeDir lib (./app/typeDir)------------------------------------------------------------------------------
//
gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall',
        "latest": true,
        config: config.typedef_file
    }, callback);
});

//
//---------- TYPESCRIPT, concatenate, uglify if non-dev env, output to builds/js------------------------------------------------------
//
gulp.task('compile-typescript', function () {
    var tsResult = gulp.src([config.source_typescript, config.lib_typescript])
        .pipe(tsc({
            target: config.typescript_compile_target_version,
            declarationFiles: false,
            noExternalResolve: true
        }).on('error', gulpUtil.log));

    return tsResult.js.pipe(outputScripts());
});

//
//----------Concatenate js lib, uglify if non-dev env, output to builds/js-------------------------------------------------------
//
gulp.task('build-bower-js', function () {
    return gulp.src(jsDependencies)
        .pipe(outputBower());
});

//
//----------Compile SASS, concatenate, minify if non-dev env, output to builds/css---------------------------------------------------
//
gulp.task('compile-css', function () {
    return gulp.src(config.source_sass)
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(addsrc(config.source_css))
        .pipe(outputCss());
});

//
//----------Copy assets to builds folder--------------------------------------------------------------------------------------------
//
gulp.task('copy-assets', function () {
    return gulp.src(config.asset_res)
        .pipe(gulp.dest(config.build_dir))
        .pipe(connect.reload());
});

//
//----------Watching the changing, re-compile, update the web content, and refresh the brower-----------------------------------
//
gulp.task('watch', function () {
    gulp.watch([config.source_typescript, config.lib_typescript], ['compile-typescript']);
    gulp.watch(jsDependencies, ['build-bower-js']);
    gulp.watch([config.source_sass, config.source_css], ['compile-css']);
    gulp.watch(config.asset_res, ['copy-assets']);
    gulp.watch(config.typedef_file, ['tsd'])
});

//
//----------Starts the local server on top of ./builds folder, http://localhost:3000---------------------------------------------
//
gulp.task('run', function () {
    connect.server({
        root: [config.build_dir],
        livereload: true,
        port: config.server_port
    })
});

//
//----------Default Gulp job, which enter developing mode---------------------------------------------------------------
//
gulp.task('default', function (callback) {
    runSequence('clean', 'tsd', 'build', 'watch', 'run', callback);
});
//
//----------Create dist at builds/interview.war---------------------------------------------------------------
//
gulp.task('zip', function () {
    return gulp.src(config.build_dir + '**/*.*')
        .pipe(zip(config.dist_file))
        .pipe(gulp.dest(config.build_dir));
});
//
//----------Package a deployable war file(builds/interview.war), will do the minify and uglify jobs -----------------------------
//
gulp.task('package', function (callback) {
    env = 'prod';
    runSequence('clean', 'tsd', 'build', 'zip', callback);
});


//*****add for test using karma-start
//
//----------Run test once and exit(karma)---------------------------------------------------------------
//
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

//
//----------Watch for file changes and re-run tests on each change(karma)--------------------------------
//
gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});
//*****add for test using karma-end