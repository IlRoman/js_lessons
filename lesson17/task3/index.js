export function defer(func, ms) {
    return function () {
        setTimeout(() => func.call(this, ...arg), ms);
    }
}