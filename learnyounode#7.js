var modular = require('./module.js');
var callback = function (err, data) {
    if (err){
        return console.error(err);
    }

    data.forEach( function (elem){
        console.log(elem);
    });
}

modular(process.argv[2], process.argv[3], function (err, list){
    if (err){
        return console.log(err);
    }
    else list.forEach(function (file){
        console.log(file);
    })
});


// Official solution

// var filterFn = require('./module.js');
// var dir = process.argv[2];
// var filterStr = process.argv[3];
//  
// filterFn(dir, filterStr, function (err, list) {
//     if (err) {
//         return console.error('There was an error:', err);
//     }
//  
//     list.forEach(function (file) {
//         console.log(file)
//     });
// });