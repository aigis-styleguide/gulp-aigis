var Aigis = require("node-aigis");
var gutil = require("gulp-util");
var through = require("through2");
var path = require("path");

module.exports = function(options) {
  return through.obj(function(file, enc, cb) {
    var aigis;
    console.log("config file: " + path.resolve(file.path));
    try {
      aigis = new Aigis(file.contents);
      aigis.run();
    }
    catch(e) {
      this.emit("error", new gutil.PluginError("gulp-aigis", "Can't parse config file"));
      cb();
    }

    this.push(file);
    cb();
  }, function(cb) {
    this.emit("end");
    cb();
  });
};

