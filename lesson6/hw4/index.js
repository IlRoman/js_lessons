function uniqueCount(array) {
    let count = 0;
    let result = array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) count++;
    }
    return count;
}