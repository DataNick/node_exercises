
var myModule = require ('./mymodule')

var dirName = process.argv[2];
var ext = process.argv[3];

myModule(dirName, ext, function(err, data){
  data.forEach(function(file){
    console.log(file)
  })
});

// var filterFn = require('./solution_filter.js')
//   var dir = process.argv[2]
//   var filterStr = process.argv[3]

//   filterFn(dir, filterStr, function (err, list) {
//     if (err)
//       return console.error('There was an error:', err)

//     list.forEach(function (file) {
//       console.log(file)
//     })
//   })
