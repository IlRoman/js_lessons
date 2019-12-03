export function getPrimes(x) {
    let result = [];
    primes:
    for (let i = 2; i <= x; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue primes;
        }
        result.push(i);
    }
    return result;
}