var array = [];

// Use Math.random() (returns a Number between 0 and 1)
// write a loop that adds 10 random numbers to the array
for (var i = 0; i < 10; i++) {
    array[Math.random() * 1000] = Math.random() * 100;
}

var sum = 0;

// use foreach to sum all the numbers in the array
array.forEach(function (pleaseDontNameYourVariableThis) {
    sum += pleaseDontNameYourVariableThis;
});

/*
every returns true or false
every returns true if execution of the passed function returns TRUE
if ANY element returns false after passed into the function, EVERY returns false
*/

// returns true if EVERY element is less than 50
// if a SINGLE ELEMENT is greater than 50, this returns false
array.every(function (reallyDontNameYourVariableThis) {
    return reallyDontNameYourVariableThis < 50;
});

/*
some is the opposite of EVERY.
If a SINGLE execution of the function is true, some is true
if ALL executions of the loop are false, some is false
*/

// returns true if any elements are less than 10
array.some(function (theseAreTerribleVariableNames) {
    return theseAreTerribleVariableNames < 10;
});

/*
filter returns a NEW ARRAY with only the elements that return true for the function
*/

// return a new array with only the even elements
array.filter(function (looooooooooooooooongVariableName) {
    return looooooooooooooooongVariableName % 2 === 0;
});

/*
map returns a NEW ARRAY by MAPPING each element through the function
*/

// return a new array where every element has been squared
// [1, 2, 3].map(function(i) { return i * i });
// [1, 4, 9]
// ['cat', 'dog', 'fish'].map(function(i) { return i.length(); });
// [3, 3, 4]
array.map(function (lfkhaslfkjhasdflkjhasdlkfjh) {
    return lfkhaslfkjhasdflkjhasdlkfjh * lfkhaslfkjhasdflkjhasdlkfjh;
});

/*
reduce is weird
*/
/*
var sum = 0;
array.forEach(function (pleaseDontNameYourVariableThis) {
    sum += pleaseDontNameYourVariableThis;
});
*/
// [1, 2, 3]
// returns 6
array.reduce(function (previous, current) {
    return previous + current;
}, 0);

// ['cat', 'mouse', 'fish']
// returns 5
array.reduce(function (previous, current) {
    return Math.max(previous, current.length());
}, 0);

// ['cat', 'mouse', 'fish', 'moose']
// returns 'mouse'
array.reduce(function (previous, current) {
    return previous.length() < current.length() ? current : previous;
}, "");

// ['cat', 'mouse', 'fish', 'moose']
// returns 'moose'
array.reduceRight(function (previous, current) {
    return previous.length() < current.length() ? current : previous;
}, "");

/*
return previous.length() < current.length() ? current : previous;

if (previous.length() < current.length()) {
    return current;
}
else {
    return previous;
}
*/