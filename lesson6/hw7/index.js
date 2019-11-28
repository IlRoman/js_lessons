function checker(arr) {
    arr.sort((a, b => a - b));
    let x = arr[0] + arr[arr.length - 1];
    return (x > 1000 ? true : false);
}