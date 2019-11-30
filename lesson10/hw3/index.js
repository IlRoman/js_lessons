function superRound(num, rounding) {
    num = Number(num);
    roundind = +rounding;
    let arr = [];
    let x = '1';
    for (let i = 0; i < rounding; i++) {
        x += '0';
    }
    arr.push(Math.floor(num * +x) / +x);
    arr.push(Math.round(num * +x) / +x);
    arr.push(Math.ceil(num * +x) / +x);
    arr.push(Math.trunc(num * +x) / +x);
    arr.push(+num.toFixed(x));
    return arr;
}