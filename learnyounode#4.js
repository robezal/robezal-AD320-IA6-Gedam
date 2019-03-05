var fs = require('fs'); 

var content = fs.readFile(process.argv[2],function(err,data){ 
    if(err){
        console.log('error');
    }
    var lines=data.toString().split('\n');
    console.log(lines.length-1);
});



// official solution

// var fs = require('fs');
// var file = process.argv[2];
//  
// fs.readFile(file, function (err, contents) {
//     var lines = contents.toString().split('\n').length - 1;
//     console.log(lines)
// });
