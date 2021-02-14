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

   getManagerRole(objManager) {

    this.manager = new Manager(objManager)
    return this.manager.getRole()

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