function sortContacts(arr, dir = true) {
    if (!Array.isArray(arr)) return null;
    if (dir) {
        return contacts.sort((a, b) => { return a.name.localCompare(b.name) });
    } else {
        return contacts.sort((a, b) => { return b.name.localCompare(a.name) });
    }
}
