export function createCalculator() {
    let count = 0;
    function add(x) { return count += x; };
    function decrease(x) { return count -= x; };
    function reset() { return count = 0; };
    function getMemo() { return count; };
    return { add, decrease, reset, getMemo };
}

// let counter = createCalculator();
// let result = counter.decrease(5);
// console.log(result);