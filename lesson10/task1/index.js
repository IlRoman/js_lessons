function getFiniteNumbers(arr) {
    return arr.filter(Number.isFinite);
}

function getFiniteNumbersV2(arr) {
    return arr.filter(isFinite);
}

function getNaN(arr) {
    return arr.filter(Number.isNaN);
}

function getNaNV2(arr) {
    return arr.filter(isNaN);
}

function getIntegers(arr) {
    return arr.filter(Number.isInteger);
}