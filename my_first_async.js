// var fs = require('fs');
// var file = process.argv[2];

// fs.readFile(file, function (err, contents) {
// // fs.readFile(file, 'utf8', callback) can also be used
// var lines = contents.toString().split('\n').length - 1;
// console.log(lines);
// });

var fs = require('fs');
var path = process.argv[2];

var content = fs.readFile(path, function (err, data) {
  console.log(data.toString().split('\n').length-1);
})


// var fs = require('fs');

// var fileName = process.argv[2];

// fs.readFile(fileName, function(err, content) {
// 	console.log(content.toString().split('\n').length - 1);
// });