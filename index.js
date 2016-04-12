var Aigis = require("node-aigis");
var gutil = require("gulp-util");
var through = require("through2");
var path = require("path");

module.exports = function(options) {
  return through.obj(function(file, enc, cb) {
    var aigis;
    var configFilePath = path.resolve(file.path);
    gutil.log("config file: " + configFilePath);
    try {
      aigis = new Aigis(configFilePath);
      aigis.run().then(cb);
    }
    catch(e) {
      this.emit("error", new gutil.PluginError("gulp-aigis", e.message));
      cb();
    }

    this.push(file);
  }, function(cb) {
    this.emit("end");
    cb();
  });
};
