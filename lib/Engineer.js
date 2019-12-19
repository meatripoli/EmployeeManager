const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(id, name, email, github){
        super(id,name,email);
        this.github = github;
        this.role = 'Engineer';
    }
    getRole(){
        return this.role;
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;