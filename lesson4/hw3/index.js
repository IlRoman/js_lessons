let count = 0;

for (let i = 0; i <= 1000; i++) {
    if (i % 2 === 0) {
        console.log('Found');
        count += i;
        if (count * 5 > 5000) {
            console.log('bigger');
        }
        else { console.log('Smaller or equal') }
    }
}