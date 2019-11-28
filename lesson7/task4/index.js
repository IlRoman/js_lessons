function getMessagesForBestStudents(allStudents, failedStudents) {
    let passedStudents = allStudents.filter(name => !failedStudents.includes(name)).map(name => 'Good job, ' + name);
    return passedStudents;
}