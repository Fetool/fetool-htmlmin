var htmlMin = require('../');

var result = htmlMin.minify('./index.html');

var result2 = htmlMin.beautify(result);

// console.log(result2);
