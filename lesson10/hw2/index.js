function getRandomNumbers(num, start, finish) {
    let arr = [];
    start = Math.ceil(start);
    finish - Math.floor(finish);
    if (finish < start) return null;
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * (finish - start) + start));
    }
    for (let i = 0; i < num; i++) {
        if (arr[i] !== Math.trunc(arr[i])) return null;
    }
    return arr;
}