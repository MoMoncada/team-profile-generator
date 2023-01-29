
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
        }
    ]) 



promptManager();