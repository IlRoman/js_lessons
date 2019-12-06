export function spy(fun) {
    let spied = function (...args) {
        if (typeof fun !== 'function') return spied.calls.push(args);
        spied.calls.push(fun);
        return fun.bind(this)();
    }
    spied.calls = [];
    return spied;
}