let sum = 0;

for (let i = 0; i <= 1000; i++) {
    sum += i;
}

let one = Math.floor(sum / 1234);
let two = sum % 1234;

one > two ? console.log(true) : console.log(false);