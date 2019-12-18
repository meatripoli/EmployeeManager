const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(id, name, email, github){
        super(name, email, id);
        this.github = github;
        this.role = 'Engineer';
    }
    engineerQuestion(){
        return inquirer.prompt({
            type: "input",
            message: "What is the employee's github username?",
            name: "github"
          }).then(answer => {
            this.github=answer.github;
          })
    }
    getRole(){
        return this.role;
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;