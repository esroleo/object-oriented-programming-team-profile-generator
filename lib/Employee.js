class Employee {
    constructor(objEmployee) {
        const {name, id, email} = objEmployee
        this.name = name;
        this.id = id;
        this.email = email;
        // this.id = id;
        // this.email = email;    
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }


}

module.exports = Employee
