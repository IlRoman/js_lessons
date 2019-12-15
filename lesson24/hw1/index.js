export function getDiff(startDate, endDate) {
    let timediff = Math.abs(startDate - endDate);

    let oneDay = 1000 * 60 * 60 * 24;
    let oneHour = 1000 * 60 * 60;
    let oneMinute = 1000 * 60;
    let oneSecond = 1000;

    let daysDiff = Math.trunc(timediff / oneDay);
    let hoursRemain = timediff - (daysDiff * oneDay);
    let hoursDiff = Math.trunc(hoursRemain / oneHour);
    let minutesRemain = hoursRemain - (hoursDiff * oneHour);
    let minutesDiff = Math.trunc(minutesRemain / oneMinute);
    let secondsRemain = minutesRemain - (minutesDiff * oneSecond);
    let secondsDiff = Math.trunc(secondsRemain / oneSecond);

    return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`;
}

console.log(getDiff(new Date(1992, 5, 1), new Date(1996, 0, 14)));

// Напишите функцию, которая вернет время в Гринвиче

// Основные требования:
// Функция должна экспортироваться под именем getDiff
// Сигнатура: getDiff(startDate, endDate), где startDate, endDate - объекты даты.
// Функция должна вернуть разницу в формате 275d 2h 58m 16s
// Входящие даты должны остаться неизменной
// Функция должна искать разницу, не зависимо от того, какая дата из переданных меньше