function swap(arr) {
    let result = arr;
    if (!Array.isArray(arr)) {
        return null;
    } else {
        result[arr.length] = arr[0];
        result.shift();
    }
    return result;
}