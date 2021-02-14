
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
        this.manager = [];
        this.engineer = [];
        this.intern = []
        this.employeeType = "";
     }

    getEmployee() {

            inquirer
            .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your team manager's id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?",
            },
        ])
        // destructure name from the prompt object
        .then(answers => {
            this.managerEmployee = new Manager(answers);
            this.manager.push(this.managerEmployee);
            //console.log(this.manager)
            //console.log("Manager's information" + this.manager.name);
            this.getEmployeeType();
            // test the object creation
            //console.log(this.currentEnemy, this.player);
            // this.startNewBattle()
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
        // destructure name from the prompt object
        .then(answers => {
            const {employeeType} = answers;
            this.employeeType = employeeType;
            this.getFurtherInformation();
            //console.log(employeeType)
            //console.log(employeeType);
           //


        // // this.managerEmployee = new Manager(answers);
        // this.manager.push(this.managerEmployee);
        // console.log(this.manager);
            // test the object creation
            //console.log(this.currentEnemy, this.player);
            // this.startNewBattle()
        });

    }

     getFurtherInformation() {
        //console.log(this.employeeType );

        if (this.employeeType === 'Intern') {
           // console.log("This is a " + this.employeeType) 

            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the intern's name?",
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the intern's id?",
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the intern's email?",
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is the intern's school name?",
                },
            ])
            .then(answers => {
                // new object 
                this.internEmployee = new Intern(answers);
                //this.intern will be an array of objects
                this.intern.push(this.internEmployee);
                // console.log(this.intern)
                // console.log(this.manager)
                this.addAnotherEmployee();
                //console.log("Manager's information" + this.manager.name);
                //();
                // test the object creation
                //console.log(this.currentEnemy, this.player);
                // this.startNewBattle()
            });

        } else if (this.employeeType === 'Engineer') {
            //console.log("This is a " + this.employeeType) 
            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the engineers's name?",
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the engineers's id?",
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the engineers's email?",
                },
                {
                    type: 'input',
                    name: 'gitHub',
                    message: "What is the engineers's GitHub username?",
                },
                
            ])
            .then(answers => {
                // new object 
                this.engineerEmployee = new Engineer(answers);
                //this.intern will be an array of objects
                this.engineer.push(this.engineerEmployee);
                // console.log(this.manager)
                // console.log(this.intern)
                // console.log(this.engineer)
                this.addAnotherEmployee();
                
                //console.log("Manager's information" + this.manager.name);
                //();
                // test the object creation
                //console.log(this.currentEnemy, this.player);
                // this.startNewBattle()
            });
        } else {
            // Not required - markes as required field in inquirer
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
                //this.addHtmTemplate(this.manager, this.engineer, this.intern);
                this.addHtmTemplate(this.manager, this.engineer, this.intern)
                // return `
                //  ${console.log(this.manager[0].name)}
                //  ${console.log(this.intern)}
                //  ${console.log(this.engineer)}`
            }
        });
    }

    addHtmTemplate(objManager, objEngineer, objIntern) {

        //console.log(objManager[0].name)
        const htmlgenerator = new HtmlGenerator()
        //console.log(htmlgenerator.getHtml(objManager, objEngineer, objIntern))
        //console.log(htmlgenerator.getHtml(objManager, objEngineer, objIntern))
        this.writeHtml(htmlgenerator.getHtml(objManager, objEngineer, objIntern))
        // console.table(this.manager)
        // console.table(this.intern)
        // console.table(this.engineer)
    }

    writeHtml(htmlTemplate) {
        writeFile(htmlTemplate)
        //console.log(htmlTemplate)
    }


}

// initiqlize game object
new RunApplication().getEmployee();
