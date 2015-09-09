
var counter = {
    _count: 0,
    toString: function () {
        return 'counter';
    },
    addCount: function () {
        this._count++;
        console.log(`this=${this} and _count=${this._count}`);
    }
};

counter.addCount();

var cat = {
    cat: 'cat'
};

window.setInterval(function () {
    this._count++;
    console.log(`this=${this} and _count=${this._count}`);
}.bind(cat), 1000);

//var dog = {
//    dog: 'dog'
//};

//function printThis() {
//    console.log(this);
//}

//window.setInterval(printThis.bind(cat), 1000);
//window.setInterval(printThis.bind(dog), 800);

var module = (function (window) {

    var _defaultTax = 0.08;

    // private methods
    function _calculatePrice(price) {
        return price + _calculateTax(price)
    }

    function _calculateTax(price) {
        return price * _defaultTax;
    }

    // exports
    return {
        get defaultTax() {
            return _defaultTax;
        },
        set defaultTax(value) {
            _defaultTax = value;
        },
        calculatePrice: _calculatePrice
    };

})();

console.log(module.calculatePrice(10)); // 10.80
module.defaultTax = .1;
console.log(module.calculatePrice(10)); // ??

var message = "hello world";
// outer function
function getFunction() {

    // inner function
    return function () {
        console.log(`He says "${message}"`);
    }
}

var func = getFunction();
message = "goodbye";
func();

/*
function getSetInterval(millis) {
    return a function that accepts a function as an argument, and calls
        window.setInterval on that function with millis as the time
}

window.setInterval(<function>, millis);
*/

function getSetInterval(seconds) {
    return function(func) {
        window.setInterval(func, seconds * 1000);
    };
}

var executeEvery5Seconds = getSetInterval(5);
executeEvery5Seconds(function () {
    console.log("Hello World");
});