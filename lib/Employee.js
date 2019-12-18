const inquirer = require("inquirer");

class Employee {
    constructor (id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = 'Employee';
    }
    basicQuestions() {
        return inquirer.prompt([
            {
              type: "input",
              message: "What is the employee's name?",
              name: "name"
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
            this.name = responses.name;
            this.email = responses.email;
            this.role = responses.role;
            if(this.role = "Manager"){
                ///create a new class Manager
                ///this should trigger the question for manager
                ///then create object with all properties
                ///append to list of employees
            }
            else if(this.role="Engineer"){}
            else if(this.role="Intern"){}
        })
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }

}

module.exports = Employee;