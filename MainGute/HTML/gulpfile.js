const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
const browserSync = require("browser-sync").create();
const useref = require("gulp-useref");
const terser = require("gulp-terser");
const gulpIf = require("gulp-if");
const cssnano = require("gulp-cssnano");
const del = require("del");

const { src, watch, dest, parallel, series } = gulp;

const paths = {
  scss: "app/assets/sass/**/*.scss",
  html: "app/*.html",
  js: "app/assets/js/**/*.js",
  pug: "app/assets/pug/**/*.pug",
  images: "app/assets/images/**/*.+(png|jpg|gif|svg)",
  media: "app/assets/media/**/*.+(mp3|mp4)",
  fonts: "app/assets/fonts/**/*",
};

function style() {
  return src(paths.scss)
    .pipe(sass())
    .pipe(dest("app/assets/css"))
    .pipe(browserSync.stream());
}

function browserSyncF() {
  browserSync.init({
    server: "app",
  });
}

function pugHtml() {
  return src(paths.pug)
    .pipe(pug({ pretty: true }))
    .pipe(dest("app"))
    .pipe(browserSync.stream());
}

function browserReload() {
  return browserSync.reload;
}

function watchJs() {
  return src("app/assets/js/main.js").pipe(browserSync.stream());
}

function wathFiles() {
  watch(paths.scss, style);
  watch(paths.pug, pugHtml);
  watch("app/assets/js/main.js", watchJs);
  watch(paths.html).on("change", browserReload());
  watch(paths.js).on("change", browserReload());
}

function minifySoucre() {
  return src(paths.html)
    .pipe(useref())
    .pipe(gulpIf("*.js", terser()))
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(dest("dist"));
}

function moveImage() {
  return src(paths.images).pipe(dest("dist/assets/images"));
}

function moveMedia() {
  return src(paths.media).pipe(dest("dist/assets/media"));
}

function moveFonts() {
  return src(paths.fonts).pipe(dest("dist/assets/fonts"));
}

function cleanBuild(done) {
  return del.sync("dist", done());
}

const watching = parallel(wathFiles, browserSyncF);
const build = series(
  cleanBuild,
  style,
  pugHtml,
  minifySoucre,
  // moveImage,
  moveFonts,
  moveMedia
);

exports.default = watching;
exports.build = build;

//Run gulp build to build production version
