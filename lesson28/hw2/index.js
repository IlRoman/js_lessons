export function maxFibonacci(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(fib(i))
    }

    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result && arr[i] < n) result = arr[i];
    }
    return result;
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(maxFibonacci(15));

// Найти наибольшее число Фибоначчи, которое не больше заданного

// Основные требования:
// Экспортируйте из файла ф-цию maxFibonacci, которая принимает аргументом число больше нуля
// Ф-ция maxFibonacci должна вернуть наибольшее число Фибоначчи, которое не больше заданного в аргументе
// Пример работы maxFibonacci(15); // 13