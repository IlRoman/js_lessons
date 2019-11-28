function squareArray(arr) {
    if (!Array.isArray(arr)) return null;
    let x = [...arr];
    return x.map(x => x * x);
}