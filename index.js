const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

var employeeObjectList={
    table: []
};
createEmployeeProfile();

function basicQuestions() {
    return inquirer.prompt([
        {
          type: "input",
          message: "What is the employee's name?",
          name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "id"
        },
        {
          type: "list",
          message: "What is the employee's title?",
          name: "role",
          choices: ["Manager", "Engineer", "Intern" ]
        },
        {
          type: "input",
          message: "What is the employee's email?",
          name: "email"
        }
    ]).then(responses => {
        var newEmployee = new Employee(responses.id, responses.name, responses.email);
        var role = responses.role;
        if(role === "Manager"){
            managerQuestion(newEmployee.id,newEmployee.name,newEmployee.email)
        }
        else if(role==="Engineer"){
            engineerQuestion(newEmployee.id,newEmployee.name,newEmployee.email)
        }
        else if(role==="Intern"){
            internQuestion(newEmployee.id,newEmployee.name,newEmployee.email)
        }
        
    })    
}
function createEmployeeProfile() {
    return inquirer.prompt(
        {
            type: "input",
            message: "Enter 1 to add new employee or 0 to terminate program",
            name: "begin"
        }).then(answer => {
            if(answer.begin==="1"){
                basicQuestions();    
            }
            else if(answer.begin==="0"){
                
                if(employeeObjectList.table.length > 0){
                    var HTMLBody = createHTLMBody(employeeObjectList.table)
                    var HTMLPage = createHTMLShell(HTMLBody)
                    fs.writeFileSync("./output/test.html",HTMLPage)
                }
                else{
                    ///end fuction
                    console.log("end program")
                }
            }
        })  

}
function managerQuestion(id,name,email){
    return inquirer.prompt({
        type: "input",
        message: "What is the employee's phone number?",
        name: "extraproperty"
      }).then(answer => {
        var newManager = new Manager(id,name,email,`Phone: ${answer.extraproperty}`)
        employeeObjectList.table.push(newManager)
        createEmployeeProfile();
      })
}
function internQuestion(id,name,email){
    return inquirer.prompt({
        type: "input",
        message: "What school is the employee attending?",
        name: "extraproperty"
      }).then(answer => {
        var newIntern = new Intern(id,name,email,`School: ${answer.extraproperty}`)
        employeeObjectList.table.push(newIntern)
        createEmployeeProfile();
      })
}
function engineerQuestion(id,name,email){
    return inquirer.prompt({
        type: "input",
        message: "What is the employee's github username?",
        name: "extraproperty"
      }).then(answer => {
        var newEngineer = new Engineer(id,name,email,`GitHub: ${answer.extraproperty}`)
        employeeObjectList.table.push(newEngineer)
        createEmployeeProfile();
      })
}
function createHTMLShell(body){
   return `<!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </head>
        <body style="background: lightgrey;">
            <main role="main">
                <!-- Main jumbotron for a primary marketing message or call to action -->
                <div class="jumbotron" style="background:tomato">
                    <div class="container">
                        <h1 class="display-3" style="text-align: center;">My Team</h1>
                    </div>
                </div>            
                <div class="container">
                    <div class="row">
                        ${body}
                    </div>
                </div> <!-- /container -->
                
            </main>
        </body>
    </html>`
}
function createHTLMBody(array){
    var bodyHTML='';
    var extraproperty;
    array.forEach(element => {
        if(element.role === "Manager"){extraproperty = element.officeNumber}
        else if(element.role === "Engineer"){extraproperty = element.github}
        else if(element.role === "Intern"){extraproperty =element.school}
        bodyHTML = `${bodyHTML}
        <div style="margin: 10px; padding: 10px; background:cornflowerblue;">
            <div style="border-bottom-style: solid; padding: 10px; color:white;">
                <h2>${element.name}</h2>
                <h2>${element.role}</h2>
            </div>
            <p style="padding-left: 10px; padding-top: 10px;">ID: ${element.id}</p>
            <p style="padding-left: 10px;">Email: ${element.email}</p>
            <p style="padding-left: 10px;">${extraproperty}</p>
        </div>` 
    });  
    return bodyHTML
}


