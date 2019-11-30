function sortContacts(arr, dir = true) {
    if (!Array.isArray(arr)) return null;
    if (dir) {
        return arr.sort((a, b) => { a.name.localCompare(b.name) });
    } else {
        return arr.sort((a, b) => { b.name.localCompare(a.name) });
    }
}