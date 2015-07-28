# gulp-aigis

```js
var gulp = require("gulp");
var aigis = require("gulp-aigis");

gulp.task("aigis", function() {
  gulp.src("./aigis_config.yml")
    .pipe(aigis());
});
```