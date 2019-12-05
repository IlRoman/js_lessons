function createArrayOfFunctions(num) {
    if (num !== +num) return null;
    let arr = [];
    if (!num) return arr;
    for (let i = 0; i < num; i++) {
        arr.push(function () {
            return i;
        })
    }
    return arr;
}

// console.log(createArrayOfFunctions(5));