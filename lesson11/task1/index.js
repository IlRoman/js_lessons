function splitText(str, len) {
    if (typeof str !== 'string') return null;
    if (len == undefined) len = 10;
    let arr = [];
    let startPosition = 0;
    while (true) {
        let result = str.substr(startPosition, len);
        if (result.length === 0) {
            break;
        }
        arr.push(result[0].toUpperCase() + result.slice(1));
        startPosition += len;
    }
    return arr.join('\n');
}