
const gulp = require('gulp'),
    yaml = require('gulp-yaml'),
    rename = require('gulp-rename');

gulp.task('tmLanguage', () => {
    return gulp.src('./ceveral-tmlanguage/Ceveral.YAML-tmLanguage')
    .pipe(yaml({
        space: 2
    }))
    .pipe(rename('ceveral2.tmLanguage.json'))
    .pipe(gulp.dest('syntaxes'))
});

gulp.task('default', ['tmLanguage'])