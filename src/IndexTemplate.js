const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class HtmlGenerator {

   getHtml(objManager, objEngineer, objIntern) {
       
    return `${objManager
        .filter(({ name }) => name) // check for the property name, if exist add card for manager
        .map(({ name, id, email, officeNumber }) => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css"/>
        
        <title>Team Tree</title>
        </head>
        <body>

            <header class="header-bag">
                <h1 class="align-self-center"> <i class="icon-coffee"></i> My Team</h1>
            </header>

            <div class="container">
                <div class="row">
                    <!-- Start of row -->

            <div class="col-sm">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">${name}</h3>
                        <h3 class="card-title"> <i class="fas fa-mug-hot"></i> ${this.getManagerRole(objManager)}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a> </li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        })
        .join('')}

        ${objEngineer
        .filter(({ name }) => name) 
        .map(({ name, id, email, gitHub }) => {
        return `
        <div class="col-sm">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${name}</h3>
                    <h3 class="card-title"><i class="fas fa-glasses"></i> ${this.getEngineerRole(objEngineer)}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a> </li>
                    <li class="list-group-item">Github: <a href="https://github.com/${gitHub}/" target="_blank">GitHub</a> </li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        })
        .join('')}

        ${objIntern
        .filter(({ name }) => name) 
        .map(({ name, id, email, school }) => {
        return `
        <div class="col-sm">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${name}</h3>
                    <h3 class="card-title"><i class="fas fa-user-graduate"></i> ${this.getSchool(objIntern)}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a> </li>
                    <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        })
        .join('')}


<!-- End of row -->
        </div>
</div>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="./assets/js/script.js"></script>
</body>
</html>
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


   getSchool(objIntern) {
    this.intern = new Intern(objIntern)
    return this.intern.getSchool()
   }

}



module.exports =  HtmlGenerator 

