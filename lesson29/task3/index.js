export const printing = () => {
    console.log(1);
    setTimeout(function () { console.log(5); }, 1000);
    console.log(2);
    setTimeout(function () { console.log(4); }, 0);
    console.log(3);
};

function one() {
    for (let i = 0; i < 5000; i++) {
        console.log(1);
    }
}

function two() {
    console.log(2);
}

setTimeout(one(), 5000)
two();