function getParsedIntegers(arr) {
    return arr.map(Number.parseInt)
}

function getParsedIntegersV2(arr) {
    return arr.map(x => x.parseInt)
}

function getParsedFloats(arr) {
    return arr.map(Number.parseFloat)
}

function getParsedFloatsV2(arr) {
    return arr.map(parseFloat)
}