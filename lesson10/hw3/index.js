function superRound(num, rounding) {
    let arr = [];
    arr.push(Math.floor(num * rounding) / rounding);
    arr.push(Math.round(num * rounding) / rounding);
    arr.push(Math.ceil(num * rounding) / rounding);
    arr.push(Math.trunc(num * rounding) / rounding);
    arr.push(num.toFixed(rounding));
    return arr;
}