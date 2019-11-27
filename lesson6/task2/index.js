function getSum(arr) {
    let result = 0;
    if (!Array.isArray(arr)) {
        return null;
    } else {
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
    }
    return result;
}