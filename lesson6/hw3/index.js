function sortAsc(array) {
    for (let i = 0; i < array.length; i++) {
        for (let q = 0; q < array.length; q++) {
            if (array[i] < array[q]) {
                let current = array[i];
                array[i] = array[q];
                array[q] = current;
            }
        }
    }
    return array;
}

function sortDesc(array) {
    for (let i = 0; i < array.length; i++) {
        for (let q = 0; q < array.length; q++) {
            if (array[i] > array[q]) {
                let current = array[i];
                array[i] = array[q];
                array[q] = current;
            }
        }
    }
    return array;
}
