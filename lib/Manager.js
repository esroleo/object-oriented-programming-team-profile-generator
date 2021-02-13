// Manager will inherit employe class properties and use its functions
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (objEmployee, officeNumber) {
       super(objEmployee);
       this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;