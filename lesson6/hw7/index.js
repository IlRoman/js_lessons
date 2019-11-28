function checker(arr) {
    arr.sort((a, b => a - b));
    if (arr[0] + arr[arr.length - 1] > 1000) return true;
    else return false;
}