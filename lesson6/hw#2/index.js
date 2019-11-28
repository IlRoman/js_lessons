function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.unshift(arr[i]);
    }
    return arr2;
}