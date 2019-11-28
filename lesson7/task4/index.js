function getMessagesForBestStudents(allStudents, failedStudents) {
    const passedStudents = allStudents.filter(name => !failedStudents.include(name));
    const messages = passedStudents.map(name => 'Good job, ' + name);
    return messages;
}