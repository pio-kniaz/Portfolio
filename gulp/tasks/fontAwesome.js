var gulp = require ('gulp');

gulp.task('fontAwesome',function(){
  return gulp.src(['node_modules/font-awesome/fonts/fontawesome-webfont.*'])
  .pipe(gulp.dest('./app/temp/fonts'))
})
