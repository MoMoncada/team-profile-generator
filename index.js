
const inquirer = require('inquirer'); // imports the 'inquirer' library, which is used to prompt the user for input.
const fs = require('fs'); // imports the 'fs' library, allows interacting with the file system.
const path = require('path'); // provides utilities for working with file and directory paths


// classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//path method // template.html ~ team
// const OUTPUT_DIR = path.resolve(__dirname, "output"); //resolves the absolute path of the 'output' directory
// const outputPath = path.join(OUTPUT_DIR, "template.html"); //joins the 'OUTPUT_DIR' and 'template.html' using the 'path.join' method


//array to store team members
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the Manager:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter an employee ID:',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('You need to enter an employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter an email address!');
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter an office number',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('You need to enter an office number!');
                    return false;
                }
            }  
        }
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu()
        
    }) 
}

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select an option to continue building your team:',
            choices: [
            'Add an engineer', 
            'Add an intern',
            'Finish building my team']
        }

    ]).then(userChoice => {
        switch (userChoice.menu) {
            case 'Add an engineer':
                promptEngineer();
                break;
            case 'Add an intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    })
}


promptManager();