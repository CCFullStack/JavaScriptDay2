function Product(name, price) {
    this._name = name;
    this._price = price;
    this.calculateTotalPrice = function() {
        return this._price + calculateTax.bind(this)();
    }
    function calculateTax() {
        return this._price * 0.08;
    }
}
var product1 = new Product('Milk', 2.33);
var product2 = new Product('Cheese', 4.33);

console.log(product1.calculateTotalPrice());