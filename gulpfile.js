let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({
            overrideBrowserlist: ['last 8 versions']
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('script',function(){
    return gulp.src([
        'node_modules/wow.js/dist/wow.js',               
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/jquery-validation/dist/jquery.validate.js',
        'node_modules/jquery-mask-plugin/dist/jquery.mask.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/owl.carousel/dist/owl.carousel.js',
        'node_modules/rateyo/src/jquery.rateyo.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});

gulp.task('style',function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/animate.css/animate.css',                
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/owl.carousel/dist/assets/owl.carousel.css',        
        'node_modules/owl.carousel/dist/assets/owl.theme.green.css',        
        'node_modules/owl.carousel/dist/assets/owl.theme.default.css',        
        'node_modules/rateyo/src/jquery.rateyo.css'
    ])
        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'))
});


gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('js', function () {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('style','script','sass', 'watch', 'browser-sync'))