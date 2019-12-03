export function findDivCount(a, b, n) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) count++
    }
    return count;
}