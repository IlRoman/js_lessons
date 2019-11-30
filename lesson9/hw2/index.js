function getPeople(obj) {
    // let arr = [];
    return Object
        .values(obj)
        .reduce((acc, item) => {
            return acc.concat(item);
        }, [])
        .map(a => a.name)
        .filter(x => x.includes('room'));
    // for (let i = 0; i < x.length; i++) {
    //     if (x[i].includes('room')) {
    //         arr.push(x[i]);
    //     }
    // }
    // return arr;
}