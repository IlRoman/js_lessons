function sortContacts(arr, dir = true) {
    if (!Array.isArray(arr)) return null;
    if (dir) {
        return arr.sort((a, b) => { return a.name.localCompare(b.name) });
    } else {
        return arr.sort((a, b) => { return b.name.localCompare(a.name) });
    }
}
