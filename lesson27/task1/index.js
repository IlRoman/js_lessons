export function getLocalStorageData() {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            return {
                ...acc,
                [key]: JSON.parse(value),
            }
        }, {});
}