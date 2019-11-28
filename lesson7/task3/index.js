function flatArray(arr) {
    let x = [...arr];
    return x.reduce((acc, num) => acc.concat(num), []);
}