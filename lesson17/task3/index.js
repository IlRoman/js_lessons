export function defer(func, ms) {
    setTimeout(() => func(), ms);
}