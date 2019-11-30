function getTotalPrice(arr) {
    let result = 0;
    let arr2 = arr.map(x => x.toFixed(2));
    for (let i = 0; i < arr2.length; i++) {
        result += Number(arr2[i]);
    }
    return '$' + result;
}