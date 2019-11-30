function sortContacts(arr, dir = true) {
    if (!Array.isArray(arr)) return null;
    let result = arr.sort((a, b) => dir ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    return result;
}