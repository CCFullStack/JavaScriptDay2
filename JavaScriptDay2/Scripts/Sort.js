/*
Imagine that you have the following array of numbers:

var listOfNumbers = [
    17, 2, 3, 78, 4, 5, 12
];

Now imagine that you need to create a sort() function. However, you need to be able to support several sort algorithms:

ascending -- numbers are sorted from smallest to largest.
descending -- numbers are sorted from largest to smallet.
random -- numbers are sorted in random order.
How would you create a sort() function that can use different strategies in the future?
(it is cheating to use the existing Array.sort() method).
*/

function sort(array, sortMethod) {
    if (typeof (sortMethod) !== typeof (Function)) {
        switch (sortMethod) {
            case 'ascending':
                sortMethod = function (a, b) {
                    return a > b;
                };
                break;
            case 'descending':
                sortMethod = function (a, b) {
                    return a < b;
                };
                break;
            case 'random':
                sortMethod = function (a, b) {
                    return Math.random() < .5;
                }
                break;
        }
    }

    var newArray = array.map(function (ele) { return ele; });

    for (var loop = 0; loop < newArray.length; loop++) {
        for (var i = 0; i < newArray.length - 1; i++) {
            if (sortMethod(newArray[i], newArray[i + 1])) {
                var temp = newArray[i];
                newArray[i] = newArray[i + 1];
                newArray[i + 1] = temp;
            }
        }
    }

    return newArray;
}

var array = ['cat', 'dog', 'fish', 'bird', 'camel', 'alpaca', 'donkey', 'horse'];
array = sort(array, 'random');
console.log(array);
console.log(sort(array, 'ascending'));
console.log(array.sort(function (a, b) {
    return a - b;
}));