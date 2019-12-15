export const studentsBirthDays = (students) => {
    let result = {};

    let ArrOfstudents = [...students].map((x) => {
        let date = x.birthDate.split('/').reverse();
        [date[1], date[2]] = [date[2], date[1]];
        date = date.join(', ');
        x.birthDate = new Date(date);
        return x;
    })

    ArrOfstudents.sort((a, b) => a.birthDate - b.birthDate);

    for (let i = 0; i < ArrOfstudents.length; i++) {
        let nameOfMonth = ArrOfstudents[i].birthDate;
        nameOfMonth = (nameOfMonth + '').split(' ');
        let nameOfProperty = nameOfMonth[1] + '';
        if (!result.hasOwnProperty(nameOfProperty)) result[nameOfProperty] = [];
        result[nameOfProperty].push(ArrOfstudents[i].name);
    }

    return result;
}

console.log(studentsBirthDays([{ name: 'Tom', birthDate: '03/26/1992' }, { name: 'Roman', birthDate: '06/16/1992' }]));