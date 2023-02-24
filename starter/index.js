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
            message: 'Section - License:',
            name: 'license',
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
            message: 'Section - Questions:',
            name: 'questions',
        },


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
     ${response.license}

## Contributions <a id="contributions"></a>
     ${response.contributions}

## Tests <a id="tests"></a>
     ${response.tests}
## Questions <a id="questions"></a>
     ${response.questions}`, 
    (err) => err ? console.error(err) : console.log('Success'))
    
    
    
})


// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
