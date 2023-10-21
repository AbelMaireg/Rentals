const { Person } = require('./basics');

class Brocker extends Person {
    constructor(object) {
        super(object.details);
        this.username = object.username;
        this.phone = object.phone;
        this.email = object.email;
        this.section = object.section;
        this.password = object.password;
    }
}