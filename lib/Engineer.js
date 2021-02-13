// Manager will inherit employe class properties and use its functions
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (objEmployee) {
       const {name, id, email} = objEmployee
       super(objEmployee);
       const {gitHub} = objEmployee;
       this.gitHub = gitHub; // GitHub user name
    }

    getGitHub() {
        return `https://github.com/${this.gitHub}`
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;