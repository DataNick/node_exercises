// process.argv.forEach(function(val, index, array){

// })

// var result = 0

// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])

//   console.log(result)
result = 0
for (i=2; i < process.argv.length; i++)
  result += +process.argv[i]// process.argv is an array containing command line arguments.
// result += Number(process.argv[i]) is another way to solve the problem
console.log(result)