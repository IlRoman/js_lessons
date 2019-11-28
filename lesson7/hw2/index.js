function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;
    let x = [...arr];
    return x.reverse();
}