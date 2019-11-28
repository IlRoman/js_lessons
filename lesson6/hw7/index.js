function checker(arr) {
    arr.sort((a, b => a - b));
    return (arr[0] + arr[arr.length - 1] > 1000 ? true : false);
}



// Напишите функцию checker(arr), которая будет суммировать макс и мин элементы массив,
// и возвращать true если сумма больше 1000, и false в другом случае