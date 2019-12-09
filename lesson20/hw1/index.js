export class Order {
    constructor(price, city, type) {
        this.id = Math.random() + '';
        this.price = price;
        this.dateCreated = new.Date();
        this.isConfirmed = false;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.price > 1000) return true;
        else return false;
    }

    confirmOrder() {
        if (this.isConfirmed !== true) this.isConfirmed = true;
        this.dateCreated = new.Date();
    }

    isValidType(Buy, Sell) {
        if (!Buy && !Sell) return false;
        else return true;
    }
}