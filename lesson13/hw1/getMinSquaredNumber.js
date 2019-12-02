export function fun(arr) {
    if (!Array.isArray(arr)) return null;
    let x = arr.map(a => Math.abs(a));
    return Math.pow(Math.min(...x), 2);
}