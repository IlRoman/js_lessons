function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let reversedArr = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArr.unshift(arr[i]);
    }

    return reversedArr;
}