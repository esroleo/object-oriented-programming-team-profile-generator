const inquirer = require('inquirer');


var test = "Engineer";


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
    ])
}



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


promptManager()
    .then(promptMemberType)
    .then(memberDetails)
    .then(answers => {
        //console.log(answers)
        //return generateReadMe(answers);
    })
    // .then(readmeFile => {
    //     //console.log(readmeFile);
    //     return writeFile(readmeFile)
    // })
    .catch(err => {
    console.log(err);
    });

