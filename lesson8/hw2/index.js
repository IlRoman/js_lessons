function getAdults(obj) {
    let result = {};
    for (let key in obj) {
        if (obj[key] >= 18) result[key] = obj[key];
    }
    return result;
}