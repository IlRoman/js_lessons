function removeDuplicates(array) {
    let result = array.sort((a, b) => a - b);
    let newarr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) newarr.push(array[i]);
    } return newarr;
}