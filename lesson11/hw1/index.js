function splitString(str, num = 10) {
    if (typeof str !== 'string') return null;
    let arr = [];
    let start = 0;

    while (true) {
        let result = str.substr(start, num);
        if (result.length === 0) {
            break;
        }
        arr.push(result);
        while (arr[arr.length - 1].length < num) {
            arr[arr.length - 1] += '.';
        }
        start += num;
    }
    return arr;
}