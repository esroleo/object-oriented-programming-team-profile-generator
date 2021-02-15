
// import inquirer libraries
const inquirer = require('inquirer');

// *** Import all empoloyee classes *** //
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// *** Import HTML generator *** //
const HtmlGenerator = require('./src/IndexTemplate');

// *** Import HTML writefile function promise *** //
const {writeFile} = require('./utils/generate-html');





class RunApplication {
    constructor () {
        // *** Hold object arrays *** //
        this.manager = [];
        this.engineer = [];
        this.intern = []
        // *** Used for conditional chesk **//
        this.employeeType = "";
     }

    getEmployee() {

            inquirer
            .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
                validate: managersName => {
                    if (managersName) {
                      return true;
                    } else {
                      console.log("Please enter your manager's name");
                      return false;
                    }
                  }

                  
            },

            {
                type: 'input',
                name: 'id',
                message: "What is your team manager's id?",
                validate: managersName => {
                    if (managersName) {
                      return true;
                    } else {
                      console.log("Please enter your manager's id");
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email?",
                validate: managersName => {
                    if (managersName) {
                      return true;
                    } else {
                      console.log("Please enter your manager's email");
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?",
                validate: managersName => {
                    if (managersName) {
                      return true;
                    } else {
                      console.log("Please enter your manager's office number");
                      return false;
                    }
                  }
            },
        ])
        // move answers to their appropiate object and push it to the respective array
        .then(answers => {
            this.managerEmployee = new Manager(answers);
            this.manager.push(this.managerEmployee);
            this.getEmployeeType();

        });
    }

    getEmployeeType() {

        inquirer
        .prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: "Which type of member would you like to add?",
            choices: ['Engineer', 'Intern']
        }
        ])
        // if answer is true go to next step
        .then(answers => {
            const {employeeType} = answers;
            this.employeeType = employeeType;
            this.getFurtherInformation();
        });

    }

     getFurtherInformation() {
       

        if (this.employeeType === 'Intern') { // If intern promot different questiosn
           

            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the intern's name?",
                    validate: managersName => {
                        if (managersName) {
                          return true;
                        } else {
                          console.log("Please enter your intern's name");
                          return false;
                        }
                      }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the intern's id?",
                    validate: managersName => {
                        if (managersName) {
                          return true;
                        } else {
                          console.log("Please enter your intern's id");
                          return false;
                        }
                      }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the intern's email?",
                    validate: managersName => {
                        if (managersName) {
                          return true;
                        } else {
                          console.log("Please enter your intern's email");
                          return false;
                        }
                      }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is the intern's school name?",
                    validate: managersName => {
                        if (managersName) {
                          return true;
                        } else {
                          console.log("Please enter your intern's school name");
                          return false;
                        }
                      }
                },
            ])
            .then(answers => { // move answers to their appropiate object and push it to the respective array
                this.internEmployee = new Intern(answers);
                this.intern.push(this.internEmployee);
                this.addAnotherEmployee(); // ask user if they want to add another employee
            });

        } else if (this.employeeType === 'Engineer') {
            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the engineers's name?",
                    validate: managersName => {
                        if (managersName) {
                          return true;
                        } else {
                          console.log("Please enter your engineer's name");
                          return false;
                        }
                      }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the engineers's id?",
                    validate: managersName => {
                        if (managersName) {
                          return true;
                        } else {
                          console.log("Please enter your engineer's id");
                          return false;
                        }
                      }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the engineers's email?",
                    validate: managersName => {
                        if (managersName) {
                          return true;
                        } else {
                          console.log("Please enter your engineer's email");
                          return false;
                        }
                      }
                },
                {
                    type: 'input',
                    name: 'gitHub',
                    message: "What is the engineers's GitHub username?",
                    validate: managersName => {
                        if (managersName) {
                          return true;
                        } else {
                          console.log("Please enter your engineer's GitHub username");
                          return false;
                        }
                      }
                },
                
            ])
            .then(answers => { // move answers to their appropiate object and push it to the respective array

                this.engineerEmployee = new Engineer(answers);
                this.engineer.push(this.engineerEmployee);
                this.addAnotherEmployee(); // ask user if they want to add another employee
            });
        } else {
            // placeholde else, not required.
        }
    }

    addAnotherEmployee() {

        inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'addAnotherEmployee',
                message: 'Would you like to add another employee?',
                default: false
            }
        ])
        .then(answer => {
            if (answer.addAnotherEmployee) {
              this.getEmployeeType();
            } else {
                // if no further employees, move to next step. Add templated html
                this.addHtmTemplate(this.manager, this.engineer, this.intern)
            }
        });
    }

    addHtmTemplate(objManager, objEngineer, objIntern) {

       // createa html generator object
        const htmlgenerator = new HtmlGenerator()
        // pass all of our objects to the prototype function get html and pass the output to writeHtml in one step.
        this.writeHtml(htmlgenerator.getHtml(objManager, objEngineer, objIntern))
    }

    writeHtml(htmlTemplate) {
        writeFile(htmlTemplate) // write HTML and application is now completed
        // *** End of application here *** //
    }


}

// initiqlize game object
new RunApplication().getEmployee();
