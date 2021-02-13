// Manager will inherit employe class properties and use its functions
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (objEmployee) {
       const {name, id, email} = objEmployee
       super(objEmployee);
       const {officeNumber} = objEmployee
       this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;