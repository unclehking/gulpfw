var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('tinclude', function() {
    gulp.src('src/test/*.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    return gulp.watch('src/**/*.html',['tinclude']);
});
