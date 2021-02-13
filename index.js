
// import inquirer libraries
const inquirer = require('inquirer');

// *** Import all empoloyee classes *** //
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// *** Manager's response area *** //
const promptManager = () => {
        
    // Prompt the player
    return inquirer.prompt([

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
            name: 'phoneNumber',
            message: "What is the team manager's office number?",
        }
    ])//.then( answers => {
    //    console.log(answers);
    // })
}

// *** Call Employee Oject population *** //

// const employee = new Employee(
//     promptManager()
//     .then(answers => {
//         return answers

//     })
//     .catch(err => {
//         console.log(err);
//         })
//     );

// console.log(employee);




// *** Team members response area *** //

const promptMemberType = managerAnswers  => {

        // If there's no 'managerAnswers object' array property, create one
        if (!managerAnswers.teamMembers) {
            managerAnswers.teamMembers = [];
        }

         
     //console.log (managerAnswers)
     // Prompt the player
     return inquirer.prompt([

        {
            type: 'list',
            name: 'teamName',
            message: "Which type of member would you like to add?",
            choices: ['Engineer', 'Intern']
        }

    ]).then(memberType => {
        managerAnswers.teamMembers.push(memberType);
        console.log(managerAnswers);
        console.log(managerAnswers.teamMembers[0].teamName);
       
        return managerAnswers
    });

    


}

const memberDetails = memberDetails  => {
    //console.log("last set of questions" + memberDetails)


}



// const promptTeamMembers = readManagerAnswers => {
//     // If there's no 'projects' array property, create one
//    if (!readManagerAnswers.members) {
//     readManagerAnswers.members = [];
//    }

//         return inquirer.prompt([

//             {
//                 type: 'input',
//                 name: 'addTip',
//                 message: 'Provide a description on how to achieve a the step/tip',
//             },
//             {
//                 type: 'input',
//                 name: 'addPicture',
//                 message: 'Provide a snapshot name of step if applicable?',
//             },
//             {
//                 type: 'confirm',
//                 name: 'tipConfirmation',
//                 message: 'Would you like to add any other tips to your project?',
//                 default: false
//             },
//         ]).then(projectData => {
//             readMeAnswers.projects.push(projectData);
//             if (projectData.tipConfirmation) {
//             return promptProjectTips(readMeAnswers);
//             } else {
//             return readMeAnswers;
//             }
//         });
// };



//promptManager();
//promptMemberType();


// const employee = promptManager()
//     //.then(promptMemberType)
//     .then(obj => {
//          const employee = new Employee(obj);
//          return employee
//     })
//     .catch(err => {
//     console.log(err);
//     });



// class Manager extends Employee {
//     constructor (objEmployee, officeNumber) {
//        super(objEmployee);
//        this.officeNumber = officeNumber;
//     }

//     getRole() {
//         return 'Manager'
//     }
// }

class RunApplication {
    constructor () {
        this.manager = [];
        this.engineer = [];
        this.intern = []
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
            console.log(this.manager);
            // test the object creation
            //console.log(this.currentEnemy, this.player);
            // this.startNewBattle()
        });
    }

    getEmployeeType() {

        inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        }
        ])
        // destructure name from the prompt object
        .then(answers => {
        // // this.managerEmployee = new Manager(answers);
        // this.manager.push(this.managerEmployee);
        // console.log(this.manager);
            // test the object creation
            //console.log(this.currentEnemy, this.player);
            // this.startNewBattle()
        });

    }
}


// initiqlize game object
new RunApplication().getEmployee();




// const questionsGenerations = userType => {

//     return inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: "What is the team manager's name?",
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: "What is your team manager's id?",
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "What is the team manager's email?",
//         },
//         {
//             type: 'input',
//             name: 'phoneNumber',
//             message: "What is the team manager's office number?",
//         }
//     ]);

// }
    

// const promptQuestionsManager = () => {
    
//     return inquirer
//     .prompt(questionsGenerations("Manager"))
//     .then (
//     // destructure name from the prompt object
//     employeeObj => {
//         const employee = new Employee(employeeObj);

//         // test the object creation
//         //console.log(this.currentEnemy, this.player);
//         //this.startNewBattle()
//     });

    
// }

// promptQuestionsManager();

