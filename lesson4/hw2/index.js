let m = 10;
let n = 20;
let result = 0;

for (let i = m; i <= n; i++) {
    if (i % 2 === 1 && 1 % 4 !== 1) result += i;
    if (i % 3 === 1) result -= i;
    if (i % 4 === 1) result *= i;
    if (i % 5 === 1) console.log(i);
    else { continue };
}
