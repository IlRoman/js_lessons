export class Order {
    constructor(price, city, type) {
        this.id = Math.random() + '';
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.price > 1000) return true;
        else return false;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType(Buy, Sell) {
        if (this.type === "Buy" || this.type === "Sell") {
            return true;
        } else return false;
    }
}