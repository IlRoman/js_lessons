export function sum(num) {
    return num == 1
        ? 1
        : num + sum(num - 1);
}

console.log(sum(4));