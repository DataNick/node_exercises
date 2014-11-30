// var fs = require('fs');

// // var filePath = './node.txt';
// var file = process.argv[2]
// // file will be something like 'test.txt'

// var contents = fs.readFileSync(file);

// // fs.readFile(file, function(err, data) {
// // 	if err
// // 		console.log("There was an error" + err);

// // });

// console.log(contents.toString().split('\n').length - 1);


var fs = require('fs')
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)