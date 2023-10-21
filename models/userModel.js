const { Person } = require('./basics');

class User extends Person {
    constructor (object) {
        super (object.details);
        this.username = object.username;
        this.email = object.email;
        this.phone = object.phone;
        this.password = object.password;
    }
}