export let event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'John', age: 18, email: 'example@server.com' },
        { name: 'Tom', age: 17, email: 'example@server.com' },
    ],
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                email: email,
                text: `Dear ${name}! ${this.message}`
            }))
    },
}

console.log(event.getInvitations());