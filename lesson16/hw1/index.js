export function createArrayOfFunctions(num) {
    let arr = [];
    if (!num) return arr;
    if (typeof num !== 'number') return null;
    for (let i = 0; i < num; i++) {
        arr.push(function () {
            return i;
        })
    }
    return arr;
}

// console.log(createArrayOfFunctions('lkmgtv'));