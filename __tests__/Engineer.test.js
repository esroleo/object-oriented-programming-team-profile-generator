const Engineer = require('../lib/Engineer.js');


test('creates a manager object', () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com"
    }

    const gitHub = "esroleo"
    const engineer = new Engineer(obj, gitHub);
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
});


test("gets github's engineer url path", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com"
    }

    const gitHub = "esroleo"
    const engineer = new Engineer(obj, gitHub);
    expect(engineer.getGitHub()).toEqual(expect.any(String));
    console.log(engineer.getGitHub());
});



  test("gets engineer's role", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com"
    }

    const gitHub = "esroleo"
    const engineer = new Engineer(obj, gitHub);
    expect(engineer.getRole()).toEqual(expect.any(String));
    //console.log(manager.getRole());
});
