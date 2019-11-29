function getPeople(obj) {
    let arr = [];
    let x = Object
        .values(obj)
        .reduce((acc, item) => {
            return acc.concat(item);
        }, [])
        .map(room => room.name);
    for (let i = 0; i < x.length; i++) {
        if (x[i].includes('room')) {
            arr.push(x[i]);
        }
    }
    return arr;
}