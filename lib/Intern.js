// Manager will inherit employe class properties and use its functions
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (objEmployee) {
        const {name, id, email} = objEmployee
       super(objEmployee);
       const {school} = objEmployee
       this.school = school; // GitHub user name
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;