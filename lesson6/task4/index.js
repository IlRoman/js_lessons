function swap(arr) {
    let [firstElement, ...rest] = arr;
    return [...rest, firstElement];
}