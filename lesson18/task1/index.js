export let event = {
    message: 'Welcome to the party',
    guests: [
        { name: 'John', age: 18, email: 'example@server.com' },
        { name: 'Tom', age: 17, email: 'example@server.com' },
    ],
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                email: email,
                message: `Dear ${name}! ${this.message}`
            }))
    },
}

// console.log(event.getInvitations());

// Отобразите предстоящий праздник в виде объекта, который может разослать приглашения всем гостям

// Основные требования:
// Экспортируйте из файла объект с именем event
// Объект event должен хранить имя в свойстве message текст приглашения
// Объект event должен хранить список гостей в свойстве guests в формате { name: 'John', age: 18, email: 'example@server.com' }
// Метод объекта getInvitations должен вернуть приглашения для всех гостей, достигших 18 лет в формате
// { email: 'user-email', message: 'Dear John! Welcome to the party!' }, где John - имя, Welcome to the party!
// - сообщение, которое храниться в поле message