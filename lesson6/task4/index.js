function swap(arr) {
    let result = arr;
    if (!Array.isArray(result)) {
        return null;
    } else {
        result[result.length] = result[0];
        result.shift();
    }
    return result;
}