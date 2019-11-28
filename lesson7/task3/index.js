function flatArray(arr) {
    return arr.reduce((acc, num) => acc.concat(num), []);
}