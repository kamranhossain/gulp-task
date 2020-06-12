const gulp = require("gulp");
const concat = require("gulp-concat");
const json = require("./js.json");
const uglify = require("gulp-uglify");

function js(done) {
  gulp
    .src(json.files)
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("static/js"));
  done();
}

gulp.task("js", js);

