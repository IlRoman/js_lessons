function splitString(str, num = 10) {
    if (typeof str !== 'string') return null;
    let arr = [];
    let start = 0;

    while (true) {
        let result = str.substr(start, num);
        if (result.length === 0) {
            break;
        }
        arr.push(result[0].toUpperCase() + result.slice(1));
        start += num;
    }
    return arr;
}