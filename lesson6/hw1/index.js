function squareArray(arr) {
    let result = [];
    if (!Array.isArray(arr)) {
        return null;
    } else {
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i] * arr[i]);
        }
    }
    return result;
}