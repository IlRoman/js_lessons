let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
        return i;
    }
}

export { arr };