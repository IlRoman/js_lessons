class Wallet {
    _balance = 0;

    getBalance() {
        return this._balance;
    }

    deposit(num) {
        this._balance += num;
    }

    withdraw(num) {
        if (amount > this._balance) {
            console.log('No enough funds');
            return;
        }
        this.balance -= num;
    }
}

// let x = new Wallet();

// console.log(x.getBalance());