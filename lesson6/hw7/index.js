function checker(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return (min + max > 1000) ? true : false;
}