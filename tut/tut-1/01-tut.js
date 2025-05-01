/* 
-- How NodeJS Differ from Vanilla JS
1. Node runs on a server- not a browser (backend or frontend).
2. The console is the terminal window 
3. global object instead of window object


*/
// console.log(global);
const os = require("os");
const path = require("path");
const math = require("./math");

console.log(math.add(2, 4));
console.log(math.sub(5, 4));
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// ------------------
// console.log('\n');
// console.log(__dirname);
// console.log(__filename);

console.log('\n');
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));