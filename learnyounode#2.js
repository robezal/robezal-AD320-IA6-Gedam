var myArgs = process.argv.slice(2);
total = 0;
for(var i in myArgs)
{
total += +(myArgs[i]);
}
console.log(total)


// official solution

// var result = 0
//  for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])
// console.log(result)
