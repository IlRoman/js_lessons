// class Vehicle {
//     constructor() {
//         name: '',
//             numberOfWheels: '',
//     },

//     move() {
//         console.log(`${this.name} is moving`)
//     },

//     stop() {
//         console.log(`${this.name} stopped`)
//     }
// }

class Ship {
    constructor(name) {
        this.hasWheels = false,
            this.name = 'Chaika',
    }

    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },

    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
    },

    __proto__: vehicle
}


// Vehicle должен хранить свойства name и numberOfWheels
// Vehicle должен иметь метод move, который выводит в консоль текст Argo is moving, где Argo - это свойство name объекта
// Vehicle должен иметь метод stop, который выводит в консоль текст Argo stopped, где Argo - это свойство name объекта
// Ship должен наследоваться от Vehicle
// Конструктор Ship принимает 3 аргумента name, numberOfWheels, maxSpeed
// Ship должен иметь метод move, который выводит в консоль текст Argo lifting anchor up, где Argo - это свойство name объекта, а затем вызывает метод move наследованный от Vehicle
// Ship должен иметь метод stop, который вызывает метод stop наследованный от Vehicle, а затем выводит в консоль текст Argo lifting anchor down, где Argo - это свойство name объекта
