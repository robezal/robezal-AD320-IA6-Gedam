var fs = require('fs');
var path = require('path');
var filename = process.argv[2];
var extsn = "." + process.argv[3];
 
var bufFile = fs.readdir(filename, function callback(err, list) {
if(!err) {
	for (var item = 0; item < list.length; item++) {
 
if (path.extname(list[item]) === extsn) {
	console.log(list[item]);
	}
}
}
});



// official solution

// var fs = require('fs');
// var path = require('path');
//  
// fs.readdir(process.argv[2], function (err, list) {
//     list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3]) {
//             console.log(file);
//         }
//     });
// });
