var Aigis = require("node-aigis");
var log = require('fancy-log');
var PluginError = require('plugin-error');
var through = require("through2");
var path = require("path");

module.exports = function(options) {
  return through.obj(function(file, enc, cb) {
    var aigis;
    var configFilePath = path.resolve(file.path);
    log("config file: " + configFilePath);
    try {
      aigis = new Aigis(configFilePath);
      aigis.run().then(cb);
    }
    catch(e) {
      this.emit("error", new PluginError("gulp-aigis", e.message));
      cb();
    }

    this.push(file);
  }, function(cb) {
    this.emit("end");
    cb();
  });
};
