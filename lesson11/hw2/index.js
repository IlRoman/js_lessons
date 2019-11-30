function countOccurrences(str, str2) {
    if (str2 === '') return null;
    let count = 0;

    let pos = 0;
    while (true) {
        let foundPos = str.indexOf(str2, pos);
        if (foundPos == -1) break;
        count++
        pos = foundPos + 1;
    }

    return count;
}