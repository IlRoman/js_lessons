function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand) * 1000;
}

export const requestUserData = (userId, callback) => {
    if (userId === 'broken') {
        setTimeout(() => callback(null, 'Failed to load user data'), randomInteger(1, 3));
        return;
    }

    setTimeout(() => callback({
        name: 'John',
        age: 17,
        userId: userId,
        email: `${userId}@example.com`,
    }), randomInteger(1, 3));
};

const onFormUserData = (firstArg, data) => {
    if (firstArg === null) return data;
    return firstArg;
};