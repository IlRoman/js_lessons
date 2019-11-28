function getAdults(obj) {
    let x = Object.entries(obj).filter(x => x[1] >= 18);
    let y = x.map(a => a[0])
    return y;
}

// console.log(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }));