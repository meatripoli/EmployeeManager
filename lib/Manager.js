const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(id,name,email,officeNumber){
        super(name,email,id);
        this.officeNumber=officeNumber;
        this.role='Manager';
    }
    managerQuestion(){
        return inquirer.prompt({
            type: "input",
            message: "What is the employee's phone number?",
            name: "phone"
          }).then(answer => {
            this.phoneNumber=answer.phone;
          })
    }
    getRole(){
        return this.role;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;