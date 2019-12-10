export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get sessionId() {
        return this._sessionId;
    }
}

export class UserRepository {

    constructor(users) {
        this._users = Object.freeze(users);
    }

    get users() {
        return this._users;
    }

    getUserNames() {
        return this.users.map(x => x = x.name);
    }

    getUserIds() {
        return this.users.map(x => x = x.id);
    }

    getUserNameById(id) {
        return this.users.filter(x => x.id == id).map(x => x = x.name) + '';
    }
}