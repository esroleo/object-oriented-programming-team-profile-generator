const Intern = require('../lib/Intern.js');


test('creates a intern object', () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com",
        school: "Universidad de Puerto Rico"
    }

    const intern = new Intern(obj);
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's school", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com",
        school: "Universidad de Puerto Rico"
    }

    const school = "Universidad de Puerto Rico"
    const intern = new Intern(obj, school);
    expect(intern.getSchool()).toEqual(expect.any(String));
    //console.log(engineer.getGitHub());
});



  test("gets intern's role", () => {
    const obj = {
        name: "esteban",
        id: 1234, 
        email: "esroleo@gmail.com",
        school: "Universidad de Puerto Rico"
    }

    const gitHub = "esroleo"
    const intern = new Intern(obj, gitHub);
    expect(intern.getRole()).toEqual(expect.any(String));
    //console.log(manager.getRole());
});
