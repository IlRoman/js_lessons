export default foo = 1;

function bar() {
    if (!foo) {
        let foo = 10;
    }

    return foo;
}

var foo = bar();

// console.log(bar());

// Исправьте объявление переменных так, чтобы в последней строчке в переменную foo попало значение 1
// Другой код, кроме обявления переменных должен остаться неизменным
// Результат поместите в файл index.js
// Переменную foo экспортируйте из файла по умолчанию
// Не пишите такой код, как вы видели в этом задании ;) Keep it simpleПоправьте объявления переменных, чтобы код удовлетворял условия ниже