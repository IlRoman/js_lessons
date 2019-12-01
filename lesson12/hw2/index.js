function cleanTransactionsList(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isFinite(arr[i])) continue;
        let x = +arr[i]
        x = x.toFixed(2)
        result.push('$' + x.trim());
    }
    return result;
}