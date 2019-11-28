function getAdults(obj) {
    let arr = [];
    let x = Object.entries(obj).filter(x => x[1] >= 18).map(x => x[0]);
    arr.push(x);
    return arr;
}

// console.log(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }));