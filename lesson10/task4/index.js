function getMaxAbsoluteNumber(arr) {
    if (!Array.isArray(arr) || arr.length == 0) return null;
    let result = arr.map(x => Math.abs(x));
    return Math.max(...result);
}