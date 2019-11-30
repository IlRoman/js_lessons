function getRandomNumbers(num, start, finish) {
    let arr = [];
    let x = 0;
    if (finish < start) return null;
    if (start !== Math.trunc(start) || finish !== Math.trunc(finish)) return null;
    for (let i = 0; i < num; i++) {
        arr.push(Math.trunc(Math.random() * (finish - start) + start));
    }
    return arr;
}