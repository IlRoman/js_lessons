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

rooms = {
    room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },
    ],
    room2: [
        { name: 'room2 name1' },
    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },
    ],
};

console.log(getPeople(rooms));