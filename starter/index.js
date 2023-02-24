// Access Fileshare module
import fs from 'fs'
// Access Path module
// const path = require('path');
// import path from 'path'
// Access Inquirer Module
// const inquirer = require("inquirer");
import inquirer from 'inquirer'
// Access the generateMarkdown JS file
// import generateMarkdown from "./utils/generateMarkdown"

// array of questions for user
inquirer 
    .prompt ([   
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        // {
        //     type: 'input',
        //     message: 'Please input your description',
        //     name: 'description',
        // },
        // {
        //     type: 'input',
        //     message: 'Section: Installation',
        //     name: 'installation',
        // },
        // {
        //     type: 'input',
        //     message: 'Section: Usage',
        //     name: 'Usage',
        // },
        // {
        //     type: 'input',
        //     message: 'Section: License',
        //     name: 'license',
        // },
        // {
        //     type: 'input',
        //     message: 'Section: Contributions',
        //     name: 'contributions',
        // },
        // {
        //     type: 'input',
        //     message: 'Section: Tests',
        //     name: 'tests',
        // },
        // {
        //     type: 'input',
        //     message: 'Section: Questions',
        //     name: 'questions',
        // },


])

.then((response) => {
    fs.writeFile("test12.md", 
    JSON.stringify(response.title), 
    (err) => err ? console.error(err) : console.log('Success'))
    
    
    
})


// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
