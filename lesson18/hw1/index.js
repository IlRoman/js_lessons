export function spy(fun) {
    let spied = function (...args) {
        spied.calls.push(args);
        return fun.bind(this)();
    }
    spied.calls = [];
    return spied;
}