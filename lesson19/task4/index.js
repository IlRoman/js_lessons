function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
    if (age < 0) {
        return false;
    }
    if (age >= 0) {
        this.age = age;
        if (this.age >= 25) console.log(`New photo request was sent for ${this.name}`);
        return age;
    }
};

// const user = new User('Tom', 17);
//console.log(user.setAge(-2))
//console.log(user.setAge(0))
// console.log(user.setAge(25));