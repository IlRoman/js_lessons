function sortContacts(arr, dir = true) {
    if (!Array.isArray(arr)) return null;
    if (dir) {
        return arr.sort((a, b) => { b.name.localeCompare(a.name) });
    } else {
        return arr.sort((a, b) => { a.name.localeCompare(b.name) });
    }
}