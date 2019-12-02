function reverseString(str) {
    if (typeOf(str) !== 'string') return null;
    return str.split('').reverse().join('');
}