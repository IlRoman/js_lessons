export function delay(delay, callback, context, ...args) {
    setTimeout(() => callback.apply(context, args), delay);
};