let path = require('path');
let util = require('util');
let v8 = require('v8')

let nombre = "Raul";
let edad = 23;
let texto = util.types.isDate(new Date());
console.log(texto);
//console.log(v8.getHeapCodeStatistics());

//console.log(path.join(__dirname, 'www', 'img', 'c'));