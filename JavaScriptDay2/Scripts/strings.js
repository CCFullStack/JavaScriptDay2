//                      1
//            012345678901
var string = "the lazy fox"

string.substring(4, 8); // returns 'lazy'
string.substr(9, 3);    // returns 'fox'

console.log(string.slice(4, 8));
console.log(string.slice(8, 4));
console.log(string.substring(4, 8));
console.log(string.substring(8, 4));

string = "asodfalsdhflaskh theMiddleWord fljkashfalhf";
string.substring(string.indexOf(' ') + 1, string.lastIndexOf(" ")); // returns 'theMiddleWord'

var apocalypse = new Date();
apocalypse.setTime(8640000000000000);
console.log(apocalypse.toDateString());
var bigBang = new Date();
bigBang.setTime(-8640000000000000);
console.log(bigBang.toDateString());
