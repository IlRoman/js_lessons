export const studentsBirthDays = (students) => {
    let result = {};

    let ArrOfstudents = [...students].map((x) => {
        let date = x.birthDate.split('/').reverse();
        [date[1], date[2]] = [date[2], date[1]];
        date = date.join(', ');
        x.birthDate = new Date(date);
        return x;
    })

    console.log(ArrOfstudents);

    ArrOfstudents.sort((a, b) => b.birthDate - a.birthDate);

    for (let i = 0; i < ArrOfstudents.length; i++) {
        if (!result.hasOwnProperty(`${ArrOfstudents[i].birthDate[1]}`)) result[`${ArrOfstudents[i].birthDate[1]}`] = [];
        result[`${ArrOfstudents[i].birthDate[1]}`].push(ArrOfstudents[i].name);
    }

    return ArrOfstudents;
}

// console.log(studentsBirthDays([{ name: 'Tom', birthDate: '06/26/1992' }, { name: 'Roman', birthDate: '06/16/1992' }]))