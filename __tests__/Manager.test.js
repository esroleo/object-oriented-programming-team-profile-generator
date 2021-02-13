const Manager = require('../lib/Manager.js');


test('creates a manager object', () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com",
        officeNumber: "12345"
    }

    const manager = new Manager(obj);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});



  test("gets manager's role", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com"
    }

    const officeNumber = "416-123-4567"
    const manager = new Manager(obj, officeNumber);
    expect(manager.getRole()).toEqual(expect.any(String));
    //console.log(manager.getRole());
});
