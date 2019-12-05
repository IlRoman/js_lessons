export function bind(func, context, ...args) {
    return function (...args2) {
        return func.call(context, ...args2, ...args);
    }
}