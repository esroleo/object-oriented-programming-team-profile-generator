const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class HtmlGenerator {

     getHtml(objManager, objEngineer, objIntern) {
        //console.log("printed from getHtml" + objManager[0].name);
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p> Name: ${objManager[0].name} </p>
    <p> ${this.getManagerRole(objManager)} </p>
    <p> Id: ${objManager[0].id} </p>
    <p> Email: ${objManager[0].email} </p>

     ${this.iterateEngineer(objEngineer)}

     [ Engineer { name: 'test', id: 'test', email: 'ts', gitHub: 'tse' } ]
    
    <p> This is the first intern name ${objIntern[0].name} </p>

</body>
</html>
      
        `
   } 

   getHtmlTest(objManager, objEngineer, objIntern) {
       
    return `${objManager
        .filter(({ name }) => name) // check for the property name, if exist add card for manager
        .map(({ name, id, email, officeNumber }) => {
        return `

        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h5 class="card-title">${this.getManagerRole(objManager)}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
        </div>
        `;
        })
        .join('')}

        ${objEngineer
        .filter(({ name }) => name) 
        .map(({ name, id, email, gitHub }) => {
            return `
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h5 class="card-title">${this.getEngineerRole(objEngineer)}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Github: ${gitHub}</li>
            </ul>
        </div>
        `;
        })
        .join('')}

        `
   }


   getManagerRole(objManager) {

    this.manager = new Manager(objManager)
    return this.manager.getRole()

   }

   getEngineerRole(objEngineer) {

    this.engineer = new Engineer(objEngineer)
    return this.engineer.getRole()

   }


   getInternRole(objIntern) {

    this.intern = new Manager(objIntern)
    return this.intern.getRole()

   }


   iterateEngineer(objEngineer) {

    console.log(objEngineer);
    let html = "";

    // Need to create another looop //
          for (const key in objEngineer[0]) {
            html += `<p> ${key}: ${objEngineer[0][key]} </p>`
            // <p> Id: ${objEngineer[prop].id} </p>
            // <p> Email: ${objEngineer[prop].email} </p>
            // <p> Email: ${objEngineer[prop].gitHub} </p>

            
        }

        return html;
          
      }



   iterateIntern() {

   }

}



module.exports =  HtmlGenerator 