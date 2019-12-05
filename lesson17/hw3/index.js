export function bind(func, context, ...args) {
    return function (...args1) {
        func.call(context, ...args1, ...args);
    }
}