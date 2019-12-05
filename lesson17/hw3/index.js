export function bind(func, context, arg1, arg2) {
    return function (arg3, arg4) {
        func.call(context, arg3, arg4, arg1, arg2);
    }
}