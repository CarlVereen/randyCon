var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync').create(),
    del = require('del');

//clean up previous or incorrect or missing files
gulp.task('clean', function() {
  return del(['dist/styles', 'dist/scripts', 'dist/images']);
});

//process all style files sass, less, css etc...
gulp.task('process-styles', function() {
  return gulp.src('src/styles/main.scss')
  //process sass files
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles/'))
  //minify css files and maintain main.css
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browserSync.stream())
    .pipe(notify({message: 'Style task complete'}));
});

//process all js files
gulp.task('process-scripts', function() {
  return gulp.src('src/scripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  //create combined js file
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dist/scripts/'))
  //create minified version and retain main.js
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('dist/scripts/'))
  .pipe(notify({message: 'Scripts task complete'}));
});

//compress images
gulp.task('process-images', function() {
  return gulp.src('src/images/**/*')
  .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
  .pipe(gulp.dest('dist/images'))
  .pipe(notify({message: 'Images task complete'}));
});

//setup browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

    gulp.watch('src/styles/**/*.scss', ['process-styles']);
    gulp.watch('src/*.html').on('change', browserSync.reload);
});


//default run at start tasks
gulp.task('default', ['clean', 'browser-sync'],  function() {
  gulp.start('process-styles', 'process-scripts', 'process-images');
});

//setup automatic watch files
gulp.task('watch', function() {
  //watch css changes
  gulp.watch('src/styles/**/*.scss', ['process-styles']);
  //watch js changes
  gulp.watch('src/scripts/*.js', ['process-scripts']);
  //watch image changes
  gulp.watch('src/images/**/*', ['process-images']);
  //Create livereload Server
  livereload.listen();
  //Watch all files in dist/, reload on changes
  gulp.watch(['dist/**']).on('change', livereload.changed);
});
