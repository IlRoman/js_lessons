function getSum(arr) {
    let result = 0;
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
    } else {
        return null;
    }
    return result;
}