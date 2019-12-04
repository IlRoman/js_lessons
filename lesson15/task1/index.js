let count = 0;

export function makeCounter() {
    return function () {
        return count++;
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());