const { src, dest, series, parallel } = require("gulp");
const uglify = require('gulp-uglify-es').default;
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');


const babel = require("gulp-babel");
const concat = require("gulp-concat");

// PATHS
const files = {
  // htmlPath: "src/**/*.html",
    jsPath: "src/Assets/*.js",
    SCSS_SRC: "src/Assets/**/*.scss",
   cssPath: "src/Assets/scss/main.css",
   SCSS_DEST:  "src/Assets/",
    imgPath: "src/Assets/images/**"
};
/*
function jsTask() {
    return src(files.jsPath)
        .pipe(uglify())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("main.js"))
        .pipe(sourcemaps.write("."))
        .pipe(dest('src/Assets/js')

        );
}
*/
// TASK : Compile SASS and compress
function sassTask() {
    return src(files.SCSS_SRC)
  //  .pipe(sourcemaps.init())
    .pipe(concat("scss/main.scss"))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   // .pipe(sourcemaps.write('.maps'))
    .pipe(dest(files.SCSS_DEST)
    );
    }

    // TASK : Minify images and copy from src to pub


// TASK : watcher
function watchTask() {

    watch([files.SCSS_DEST],
        parallel(sassTask)

    );
}

exports.default = series(
    parallel(sassTask),
    watchTask

);