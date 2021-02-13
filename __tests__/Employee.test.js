
const Employee = require('../lib/Employee.js');


test('creates a employee object', () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com"
    }
    const employee = new Employee(obj);
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});



test("gets employee name", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com"
    }

    const employee = new Employee(obj);
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
  });

test("gets employee id", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com"
    }

    const employee = new Employee(obj);
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com"
    }

    const employee = new Employee(obj);
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
  });

test("gets employee's role", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com"
    }

    const employee = new Employee(obj);
    expect(employee.getRole()).toEqual(expect.any(String));


});
