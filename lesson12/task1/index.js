function calc(a) {
    let x = a.split(' ');
    let result = 0;
    switch (x[1]) {
        case '+':
            result = Number(+x[0] + +x[2]);
        case '-':
            result = Number(+x[0] - +x[2]);
        case '*':
            result = Number(+x[0] * +x[2]);
    }
    return a + ' = ' + result;
}