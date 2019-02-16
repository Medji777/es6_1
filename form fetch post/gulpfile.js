let gulp = require('gulp'),
    notify = require('gulp-notify'),
    babel = require('gulp-babel'),
    cssMin = require('gulp-csso'),
    htmlMin = require('gulp-htmlmin'),
    jsMin = require('gulp-uglifyjs'),
    autoPrefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    BS = require('browser-sync'),
    rename = require('gulp-rename'),
    delFiles = require('del'),
    serverPhp = require('gulp-connect-php');


gulp.task('html',()=>{
    gulp.src('./app/html/index.html')
        .pipe(htmlMin({collapseWhitespace:true}))
        .pipe(gulp.dest('./dist'))
        .pipe(notify('Done html!'));
    BS.reload({stream:false});
});

gulp.task('js',()=>{
    gulp.src('./app/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(jsMin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify('Done js!'));
    BS.reload({stream: false});
});

gulp.task('css',()=>{
    gulp.src('./app/css/**/*.css')
        .pipe(gulp.dest('./dist/css'))
        .pipe(cssMin())
        .pipe(autoPrefix())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify('Done css!'));
    BS.reload({stream: false});
});

gulp.task('php',()=>{
    gulp.src('./app/backend/**/*.php')
        .pipe(gulp.dest('./dist/php'))
        .pipe(notify('Done php'));
    BS.reload({stream: false});
});

gulp.task('clear',()=>{
    delFiles.sync(['./dist/*']);
});

gulp.task('watchFiles',()=>{
    gulp.watch(['./app/html/index.html'],['html']);
    gulp.watch('./app/js/**/*.js', ['js']);
    gulp.watch('./app/css/**/*.css', ['css']);
    gulp.watch('./app/backend/**/*.php', ['php']);
});

gulp.task('SPhp',()=>{
    serverPhp.server({
        base: './dist',
        port: 8000,
        bin: 'D:/php5.6/php/php.exe',
        ini: 'D:/php5.6/php/php.ini'},()=>{
        BS({
            proxy: '127.0.0.1',
            port: '8000'
        })
    })
});

/*gulp.task('server',()=>{
    BS({
        proxy: '127.0.0.1',
        port: '3000'
    })
});*/

gulp.task('default',['clear','html','js','css','php','watchFiles','SPhp'],()=>{
    console.log('work default');
});