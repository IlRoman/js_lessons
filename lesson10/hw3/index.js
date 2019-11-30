function superRound(num, rounding) {
    let arr = [];
    let x = Math.pow(10, rounding)
    arr.push(Math.floor(num * +x) / +x);
    arr.push(Math.round(num * +x) / +x);
    arr.push(Math.ceil(num * +x) / +x);
    arr.push(Math.trunc(num * +x) / +x);
    arr.push(+num.toFixed(rounding));
    return arr;
}