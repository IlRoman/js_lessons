export let user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(fullName) {
        let x = fullName.split(' ');
        this.firstName = x[0];
        this.lastName = x[1];
    }
}