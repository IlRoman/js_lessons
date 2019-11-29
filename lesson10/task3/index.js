function multiRound(num) {
    let arr = [];
    arr.push(Math.floor(+num * 100));
    arr.push(Math.round(+num * 100));
    arr.push(Math.ceil(+num * 100));
    arr.push(Math.trunc(+num * 100));
    arr.push(+num.toFixed(2));
    return arr;
}