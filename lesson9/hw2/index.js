function getPeople(obj) {
    return Object
        .values(obj)
        .reduce((acc, item) => {
            return acc.concat(item);
        }, [])
        .map(room => room.name);
}