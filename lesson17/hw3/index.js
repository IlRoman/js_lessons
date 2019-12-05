export function bind(func, context, arg1, arg2) {
    return function () {
        func.call(context, arg1, arg2);
    }
}