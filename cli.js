#!/usr/bin/env node

var fs = require('fs');
var Mp4Convert = require('./index');

var argv = process.argv.slice(2);

var input  = argv[0];
var output = argv[1];

if (!fs.existsSync(input)) {
	return console.log('Input file not found');
}

var convert = new Mp4Convert(input, output);
convert.on('ffprobeCommand', function(cmd) {
	console.log('Command', cmd);
});
convert.on('ffprobeOutput', function(json) {
	console.log('ffprobe output');
});
convert.on('progress', function(p) {
	console.log('Progress', p);
});
convert.on('done', function() {
	console.log('Done');
});
convert.start();




