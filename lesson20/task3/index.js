export class Wallet {
    _balance = 0;

    getBalance() {
        return this._balance;
    }

    deposit(num) {
        this._balance += num;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enough funds');
            return;
        }
        this._balance -= amount;
    }
}

// let x = new Wallet();

// console.log(x.getBalance());