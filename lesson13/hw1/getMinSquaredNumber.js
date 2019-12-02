export default function getMinSquaredNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let x = arr.map(a => Math.abs(a));
    return Math.pow(Math.min(...x), 2);
}