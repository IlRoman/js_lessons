function getTotalPrice(arr) {
    let result = 0;
    let arr2 = arr.map(x => Math.floor(x * 100) / 100);
    for (let i = 0; i < arr2.length; i++) {
        result += Number(arr2[i]);
    }
    return '$' + result;
}