function sum(from, to) {
    let result = 0;
    for (let i = from; i <= to; i++) {
        result += i;
    }
    return result;
}

function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return true;
    } else {
        return false;
    }
}