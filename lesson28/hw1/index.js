const shmoment = (date) => {
    let result = new Date(date);

    const calc = {
        add(type, value) {
            if (type == 'years') result = new Date(result.setFullYear(result.getFullYear() + value));
            if (type == 'months') result = new Date(result.setMonth(result.getMonth() + value));
            if (type == 'days') result = new Date(result.setDate(result.getDate() + value));
            if (type == 'hours') result = new Date(result.setHours(result.getHours() + value));
            if (type == 'minutes') result = new Date(result.setMinutes(result.getMinutes() + value));
            if (type == 'seconds') result = new Date(result.setSeconds(result.getSeconds() + value));
            if (type == 'milliseconds') result = new Date(result.setMilliseconds(result.getMilliseconds() + value));
            return this;
        },
        subtract(type, value) {
            if (type == 'years') result = new Date(result.setFullYear(result.getFullYear() - value));
            if (type == 'months') result = new Date(result.setMonth(result.getMonth() - value));
            if (type == 'days') result = new Date(result.setDate(result.getDate() - value));
            if (type == 'hours') result = new Date(result.setHours(result.getHours() - value));
            if (type == 'minutes') result = new Date(result.setMinutes(result.getMinutes() - value));
            if (type == 'seconds') result = new Date(result.setSeconds(result.getSeconds() - value));
            if (type == 'milliseconds') result = new Date(result.setMilliseconds(result.getMilliseconds() - value));
            return this;
        },
        result() {
            return result;
        },
    }
    return calc;
}

// Напишите функцию, которая в цепочке вызовов проводит операции с входной датой

// Функция shmoment должна принять начальное значение и вернуть объект с набором методов
// Метод result должен вернуть дату после всех преобразований
// Должна быть поддержка прибавления .add('days', 5)
// Должна быть поддержка вычитания .subtract('minutes', 78)
// Прибавить и вычитать можно 'years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'
// Должна быть поддержка вызывать методы add, subtract в цепочке в любом порядке и комбинациях
// Пример работы shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result(); // ... Jan 15 2019 17:19:17 ...
// Начальная дата должна остаться неизменной