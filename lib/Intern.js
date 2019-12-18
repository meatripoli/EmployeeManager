const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(id,name,email,school){
        super(name,email,id);
        this.school=school;
        this.role='Intern';
    }
    internQuestion(){
        return inquirer.prompt({
            type: "input",
            message: "What school is the employee attending?",
            name: "school"
          }).then(answer => {
            this.school=answer.school;
          })
    }
    getRole(){
        return this.role;
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;