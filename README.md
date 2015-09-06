# gulp-aigis

gulp plugin for [aigis](https://github.com/pxgrid/aigis)

## Usage

The path to your aigis config file as source.

```js
var gulp = require("gulp");
var aigis = require("gulp-aigis");

gulp.task("aigis", function() {
  gulp.src("./aigis_config.yml")
    .pipe(aigis());
});
```

## Documents

See [aigis repo](https://github.com/pxgrid/aigis) 
