export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    static createEmpty() {
        return {
            name: "",
            age: null,
        }
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    };

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    };

    setAge(age) {
        if (age < 0) {
            return false; 
        }
        if (age >= 0) {
            this.age = age;
            if (this.age >= 25) console.log(`New photo request was sent for ${this.name}`);
            return age;
        }
    };
}

// const user = new User('Tom', 17);
// console.log(user);
// console.log(user.setAge(-2))
// console.log(user.setAge(0))
// console.log(user.setAge(25));
// let user2 = User.createEmpty();
// console.log(user2);