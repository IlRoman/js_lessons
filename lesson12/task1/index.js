function calc(a) {
    let x = a.split(' ');
    let result = '';
    switch (x[1]) {
        case '+':
            result = Number(+x[0] + +x[2]);
            break;
        case '-':
            result = Number(+x[0] - +x[2]);
            break;
        case '*':
            result = Number(+x[0] * +x[2]);
            break;
        case '/':
            result = Number(+x[0] / +x[2]);
            break;
    }
    return a + ' = ' + result;
}

console.log(calc('16 * 2'));
