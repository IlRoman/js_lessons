function getRandomNumbers(num, start, finish) {
    let arr = [];
    let x = 0;
    for (let i = 0; i < num; i++) {
        arr.push(Math.trunc(Math.random() * (finish - start) + start));
    }
    return arr;
}