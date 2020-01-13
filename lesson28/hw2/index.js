export function maxFibonacci(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        if (c > n) return b
        a = b;
        b = c;
    }
}