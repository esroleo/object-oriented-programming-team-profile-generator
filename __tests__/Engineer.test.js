const Engineer = require('../lib/Engineer.js');


test('creates a engineer object', () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com",
        gitHub: "esroleo"
    }

    const engineer = new Engineer(obj);
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
});


test("gets github's engineer url path", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com",
        gitHub: "esroleo"
    }


    const engineer = new Engineer(obj);
    expect(engineer.getGitHub()).toEqual(expect.any(String));
    //console.log(engineer.getGitHub());
});



  test("gets engineer's role", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com",
        gitHub: "esroleo"
    }


    const engineer = new Engineer(obj);
    expect(engineer.getRole()).toEqual(expect.any(String));
    //console.log(manager.getRole());
});
