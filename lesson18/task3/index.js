function sumOfSquares(...args) {
    let arr = [...args];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result.reduce((a, b) => a + b);
}