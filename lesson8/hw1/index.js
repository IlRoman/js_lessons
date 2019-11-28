function pickProps(obj, arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        for (let key in obj) {
            if (arr[i] == key) result[key] = obj[key];
        }
    }
    return result;
}