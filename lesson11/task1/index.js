function splitText(str, len = 10) {
    if (typeof str !== 'string') return null;
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