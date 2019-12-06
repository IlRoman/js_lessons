export function spy(fun) {
    let spied = function (...args) {
        if (typeof fun !== 'function') return spied.calls.push(args);
        return fun.bind(this)();
    }
    spied.calls = [];
    return spied;
}