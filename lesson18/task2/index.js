export let wallet = {
    transactions: [2, 3, 4, 5],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },
}

// export let wallet = {
//     transactions: [2, 3, 4, 5],
//     getMax() {
//         return Math.max.apply(null, this.transactions);
//     },
//     getMin() {
//         return Math.min.apply(null, this.transactions);
//     },
// }

// console.log(wallet.getMax());
// console.log(wallet.getMin());