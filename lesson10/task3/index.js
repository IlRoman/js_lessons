function multiRound(num) {
    let arr = [];
    arr.push(Math.floor(num));
    arr.push(Math.round(num));
    arr.push(Math.ceil(num));
    arr.push(Math.trunc(num));
    arr.push(num.toFixed());
    return arr;
}