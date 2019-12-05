export function defer(func, ms) {
    return function () {
        setTimeout(() => func(...arg), ms);
    }
}