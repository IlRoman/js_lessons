function getAdults(obj) {
    let arr = [];
    let x = Object.entries(obj).filter(x => x[1] >= 18);
    return arr;
}