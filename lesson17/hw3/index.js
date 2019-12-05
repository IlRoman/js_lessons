export function bind(func, context, arg1, arg2) {
    return function (arg1, arg2) {
        func.call(context, arg1, arg2);
    }
}