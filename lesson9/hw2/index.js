function getPeople(obj) {
    return Object
        .values(obj)
        .reduce((acc, item) => {
            return acc.concat(item);
        }, [])
        .map(room => room.name);
}


let rooms = {
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
}

console.log(getPeople(rooms));

// (плоский массив строк ['room1 name1', 'room1 name2', ... 'room2 name1', 'room3 name1', ...]).
// Пользуйтесь разнообразием методов массивов и объектов. Обычный цикл for для решения этой задачи подходит не лучшим образом.