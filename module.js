var fs = require('fs')

module.exports = function(dirName, extName, callback){

fs.readdir(dirName, function (err, contents){
    var cont = [];
    if (err){
        return callback(err)
    }

    for(var i = 0; i < contents.length; i++){
            var comp = contents[i].split('.')
            if(comp[1] === extName){
                cont.push(contents[i])
            }
        }
        callback(null, cont)
    });
};



// Official solution 

// var fs = require('fs');
// var path = require('path');
//  
// module.exports = function (dir, filterStr, callback) {
//  
//     fs.readdir(dir, function (err, list) {
//         if (err) {
//             return callback(err);
//         }
//  
//         list = list.filter(function (file) {
//             return path.extname(file) === '.' + filterStr
//         });
//  
//         callback(null, list)
//     })
// }
// 






