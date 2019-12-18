const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

var employeeObjectList={};
createEmployeeProfile();



function createEmployeeProfile() {
    return inquirer.prompt(
        {
            type: "input",
            message: "Enter 1 to add new employee or 0 to terminate program",
            name: "begin"
        }).then(answer => {
            if(answer.begin==="Yes"){
                ///create new employee obj
                console.log("create new employee obj")
                var newEmployee = new Employee;
                newEmployee.basicQuestions();

                ///need to find a better place to call the function again
                ///createEmployeeProfile();
            }
            else if(answer.begin==="No"){
                ///end fuction
                console.log("end program")
            }
        })  

}

Employee.prototype.basicQuestions = async function() {
    const responses = await inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "list",
            message: "What is the employee's title?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
        }
    ]);
    this.name = responses.name;
    this.email = responses.email;
    this.role = responses.role;
    if (this.role = "Manager") {
        ///create a new class Manager
        ///this should trigger the question for manager
        ///then create object with all properties
        ///append to list of employees
    }
    else if (this.role = "Engineer") { }
    else if (this.role = "Intern") { }
    }