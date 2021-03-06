export function getDiff(startDate, endDate) {
    let timediff = Math.abs(endDate - startDate);

    let oneDay = 1000 * 60 * 60 * 24;
    let oneHour = 1000 * 60 * 60;
    let oneMinute = 1000 * 60;
    let oneSecond = 1000;

    let daysDiff = Math.trunc(timediff / oneDay);
    let hoursRemain = timediff - (daysDiff * oneDay);
    let hoursDiff = Math.trunc(hoursRemain / oneHour);
    let minutesRemain = hoursRemain - (hoursDiff * oneHour);
    let minutesDiff = Math.trunc(minutesRemain / oneMinute);
    let secondsRemain = minutesRemain - (minutesDiff * oneMinute);
    let secondsDiff = Math.trunc(secondsRemain / oneSecond);

    return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`;
}

console.log(getDiff(new Date(1992, 5, 1), new Date(1996, 0, 14)));