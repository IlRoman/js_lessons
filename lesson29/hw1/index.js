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

// console.log(requestUserData('userid777', onFormUserData));

// Напишите функцию, которая принимает id пользователя и имитирует загрузку данных о пользователе

// Основные требования:
// Файл должен экспортировать функцию под именем requestUserData
// Сигнатура: requestUserData(userId, callback), где первый аргумент - строка - идентификатор пользователя,
// callback - ф-ция обратного вызова

// requestUserData должна вызвать callback со случайной задержкой (1 - 3 секунды) c данными в виде объекта
// { name: 'John', age: 17, userId: 'userid777', email: 'userid777@example.com' },
// где 'userid777' был передан ф-ции в аргументе, как идентификатор пользователя
// Ф-ция requestUserData должна вызвать callback с текстом ошибки во втором аргументе
// (callback(null, 'Failed to load user data')), если переданный userId равен 'broken'