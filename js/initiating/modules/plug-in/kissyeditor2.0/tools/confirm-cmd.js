var kmd = require('kmd'),
	through2 = require('through2'),
	gutil = require('gulp-util'),
	PluginError = gutil.PluginError;

var kissy2cmd = kmd.kissy2cmd;

const PLUGIN_NAME = 'gulp-kmd';

function confirmCmd(){
	var stream = through2.obj(function(file, enc, callback){
		if(file.isNull()){
			return callback();
		}
		if(file.isStream()){
			this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      		return cb();
		}
		var fileInCmd = kissy2cmd.parse(file.contents.toString(),{ fromString : true });
		// debugger;
		file.contents = new Buffer(fileInCmd);
		 this.push(file);
		callback();
	});
	return stream;
}

module.exports = confirmCmd;