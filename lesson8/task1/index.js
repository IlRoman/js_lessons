function transformToObject(arr) {
    let obj = {};
    arr.forEach(el => obj[el] = el);
    return obj;
}