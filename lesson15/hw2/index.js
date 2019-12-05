function createLogger() {
    let arr = [];

    return {
        warn: function (str) {
            arr.push(
                {
                    message: str,
                    dateTime: new Date(),
                    type: 'warn',
                })
            return arr;
        },

        error: function (str) {
            arr.push(
                {
                    message: str,
                    dateTime: new Date(),
                    type: 'error',
                })
            return arr;
        },

        log: function (str) {
            arr.push(
                {
                    message: str,
                    dateTime: new Date(),
                    type: 'log',
                })
            return arr;
        },

        getRecords: function (string) {
            if (!string || typeof string != 'string') {
                arr.sort((a, b) => b.dateTime - a.dateTime);
            } else {
                return arr.filter(x => x.type == string)
                    .sort((a, b) => b.dateTime - a.dateTime);
            }
        },
    }
}

let counter = createLogger();

counter.warn('warn');
counter.log('error');
counter.log('log');
console.log(counter.getRecords('log'));

// createLogger должна вернуть логгер с методами:
// warn - принимает ворнинг в виде строки и записывает в память
// error - принимает ошибку в виде строки и записывает в память
// log - принимает сообщение в виде строки и записывает в память

// getRecords - принимает строку 'warn' или 'error' или 'log' и возвращает соответственно ворнинги, ошибки или логи в формате
//{ message: [сохраненное сообщение], dateTime: [время регистрации сообщения], type: [тип записи] }, где type - 'warn' или 'error' или 'log'

// getRecords возвращает все сообщения (всех типов), если аргумент не передан
// getRecords должен вернуть сообщения в виде массива, отсортированному по времени по убыванию (новые сообщения в массиве идут первыми)
// getRecords должен возвращать пустые массивы, если сообщений соответствующего типа не поступало

// Логгеры, созданные с помощью createLogger должны быть независимы друг от друга (у каждого своя память)
// Обязательно покрывайте и отлаживайте ваше решение тестами перед проверкой на сайте