function sum(from, to) {
    let result = 0;
    for (let i = from; 1 <= to; i++) {
        result += i;
    }
}

function compareSums(a, b, c, d) {
    return (sum(a, b) > sum(c, d) ? true : false);
}