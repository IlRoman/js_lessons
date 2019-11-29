function getCustomersList(obj) {
    let object = { ...obj };
    let arr = Object.entries(obj)
        .map(x => x = { ...x[1], id: x[0] })
        .sort((a, b) => a.age > b.age ? 1 : -1);
    return arr;
}