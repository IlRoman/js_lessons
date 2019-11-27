function getArrayBounds(arr) {
    if (Array.isArray(arr)) {
        return [arr.length, arr[0], arr[arr.length - 1]];
    } else return null;
}