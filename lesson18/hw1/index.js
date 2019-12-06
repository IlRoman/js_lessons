function spy(fun) {
    let spied = function (...args) {
        if (!fun) return spied.calls.push(args);
        return fun.bind(user)();
    }
    spied.calls = [];
    return spied;
}