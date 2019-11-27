function swap(arr) {
    let result = arr;
    if (!Array.isArray(arr)) {
        return null;
    } else {
        result[arr.length] = result[0];
        result.shift();
    }
    return result;
}