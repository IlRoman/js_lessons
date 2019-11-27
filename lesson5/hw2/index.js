function getPrimes(a) {
    for (let i = 2; i <= a; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue;
        }
        console.log(i);
    }
}