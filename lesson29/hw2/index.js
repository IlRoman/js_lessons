export function delay(delay, callback, context, ...args) {
    setTimeout(() => callback.apply(context, ...args), delay);
};


// Напишите функцию, которая выполнит другую ф-цию с определенной задержкой

// Основные требования:
// Файл должен экспортировать функцию под именем delay
// Сигнатура: delay(delay, callback, context, arg1, arg2, arg3, ...),
// где delay - время задержки (число), callback - ф-ция, которая будет вызвана, context - контекст для вызова callback,
// arg1, arg2, arg3, ... - аргументы для вызова callback (может быть неограниченное к-во)