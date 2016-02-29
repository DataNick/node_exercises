
var http = require('http');
var fs = require('fs');
var file = process.argv[3];
var readableStream = fs.createReadStream(file);



var server = http.createServer(function (req, res) {
  req.pipe(map(function (chunk) {
    return chunk.toString().split('').reverse().join('')
  })).pipe(res);
});

server.listen(process.argv[2]);


// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))