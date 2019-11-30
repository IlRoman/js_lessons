function getRandomNumbers(num, start, finish) {
    let arr = [];
    if (finish < start) return null;
    for (let i = 0; i < num; i++) {
        arr.push(Math.trunc(Math.random() * (finish - start) + start));
    }
    for (let i = 0; i < num; i++) {
        if (arr[i] !== Math.trunc(arr[i])) return null;
    }
    return arr;
}