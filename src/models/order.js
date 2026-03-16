class Order {
    constructor(id, symbol, type, quantity, price) {
        this.id = id;
        this.symbol = symbol;
        this.type = type;
        this.quantity = quantity;
        this.price = price;
    }
}
module.exports = Order;