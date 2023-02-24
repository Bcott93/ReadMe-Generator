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
        {
            type: 'input',
            message: 'Please input your description:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Section - Installation:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Section - Usage:',
            name: 'usage',
        },
       
        {
            type: 'input',
            message: 'Section - Contributions:',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Section - Tests:',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please enter your github username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Please enter your email address:',
            name: 'email',
        },
        // {
        //     type: 'input',
        //     message: 'Section - License:',
        //     name: 'license',
        // },


])

.then((response) => {
    fs.writeFile("test12.md", 
    `# ${response.title}

## Description

     ${response.description}


## Table of contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation <a id="installation"></a>
     ${response.installation}

## Usage <a id="usage"></a>
     ${response.usage}

## License <a id="license"></a>
 When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

## Contributions <a id="contributions"></a>
     ${response.contributions}

## Tests <a id="tests"></a>
     ${response.tests}
## Questions <a id="questions"></a>
If you have any further questions, you can find my GitHub profile and email address below. Please reach out and I will do my best to assist.
GitHub Profile: 
[www.github.com/${response.github}](https://www.github.com/${response.github})
Email Address:${response.email}


      
     
     `, 
    (err) => err ? console.error(err) : console.log('Success'))
    
    
    
})


// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
