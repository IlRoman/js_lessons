export const studentsBirthDays = (students) => {
    let result = {};

    for (let i = 0; i < students.length; i++) {
        let date = students[i].birthDate.split('/').reverse();
        [date[1], date[2]] = [date[2], date[1]];
        date = (new Date(date.join(', ')) + '').split(' ')
        console.log(date);
        if (!result.hasOwnProperty(`${date[1]}`)) result[`${date[1]}`] = [];
        result[`${date[1]}`].push(students[i].name);
    }
    return result;
}

// console.log(studentsBirthDays([{ name: 'Tom', birthDate: '01/15/2010' }, { name: 'Roman', birthDate: '06/01/1992' }]))