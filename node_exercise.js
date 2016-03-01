// var i, a, b, c, max;

// max = 1000000;

// var d = Date.now();

// for (i = 0; i < max; i++) {
//     a = 1234 + 5678 + i;
//     b = 1234 * 5678 + i;
//     c = 1234 / 2 + i;
// }

// console.log(Date.now() - d);

// console.log("Hello World");

// // Include http module.
// var http = require("http");

// // Create the server. Function passed as parameter is called on every request made.
// // request variable holds all request parameters
// // response variable allows you to do anything with response sent to the client.
// http.createServer(function (request, response) {
//   // Attach listener on end event.
//   // This event is called when client sent all data and is waiting for response.
//   request.on("end", function () {
//     // Write headers to the response.
//     // 200 is HTTP status code (this one means success)
//     // Second parameter holds header fields in object
//     // We are sending plain text, so Content-Type should be text/plain
//     response.writeHead(200, {
//       'Content-Type': 'text/plain'
//     });
//     // Send data and end response.
//     response.end('Hello HTTP!');
//   });
// // Listen on the 8080 port.
// }).listen(8080);

// Include http module,
var http = require("http"),
// And url module, which is very helpful in parsing request parameters.
  url = require("url");

// Create the server.
http.createServer(function (request, response) {
  // Attach listener on end event.
  request.on('end', function () {
    // Parse the request for arguments and store them in _get variable.
    // This function parses the url from request and returns object representation.
    var _get = url.parse(request.url, true).query;
    // Write headers to the response.
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    // Send data and end response.
    response.end('Here is your data: ' + _get['data']);
  });
// Listen on the 8080 port.
}).listen(8080);