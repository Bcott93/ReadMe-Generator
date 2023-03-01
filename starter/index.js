// Access FS module
import fs from 'fs'
// Access Path module
import path from 'path'
// Access Inquirer Module
import inquirer from 'inquirer'
// Access the generateMarkdown JS file
import generateMarkdown from "./utils/generateMarkdown.js"

// Ternary operator to check if the the userInput has a value or not
function validateUserInput(input) {
    return (input !== "") ? true : ("I did not detect a value, please enter a valid input")
}
// Ternary operator to check if the the userInput includes a @ or not
function validateEmail(input) {
    return (input.includes("@")) ? true : ("I did not detect a valid email address, please try again")
}

const licenses = ["MIT", "CCO-1.0", "EPL 1.0"]

const licenseInfo = [
    {
        licName: licenses[0],
        icon: "https://img.shields.io/badge/License-MIT-yellow.svg",
        link: "https://opensource.org/licenses/MIT",
    },
    {
        licName: licenses[1],
        icon: "https://licensebuttons.net/l/zero/1.0/80x15.png",
        link: "http://creativecommons.org/publicdomain/zero/1.0/",
    },
    {
        licName: licenses[2],
        icon: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
        link: "https://opensource.org/licenses/EPL-1.0",
    },
]

let licIcon = ""
let licLink = ""

function setIcon(response) {   
    if (response.license === licenses[0]) {
    licIcon = licenseInfo[0].icon
    licLink = licenseInfo[0].link
   
    } else {
        if (response.license === licenses[1]) {
             licIcon = licenseInfo[1].icon
             licLink = licenseInfo[1].link
       
} else {
    licIcon = licenseInfo[2].icon
    licLink = licenseInfo[2].link
}
}
return
}



inquirer 
    .prompt ([   
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            validate: validateUserInput,
        },
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
            validate: validateUserInput,
        },
        {
            type: 'input',
            message: 'Please input your description:',
            name: 'description',
            validate: validateUserInput,
        },
        {
            type: 'input',
            message: 'Please detail installation instructions:',
            name: 'installation',
            validate: validateUserInput,
        },
        {
            type: 'input',
            message: 'Please detail usage information:',
            name: 'usage',
            validate: validateUserInput,
        },
       
        {
            type: 'input',
            message: 'Please detail contribution guidelines:',
            name: 'contributions',
            validate: validateUserInput,
        },
        {
            type: 'input',
            message: 'Please detail test instructions:',
            name: 'tests',
            validate: validateUserInput,
        },
        {
            type: 'input',
            message: 'Please enter your github username:',
            name: 'github',
            validate: validateUserInput,
        },
        {
            type: 'input',
            message: 'Please enter your email address:',
            name: 'email',
            validate: validateEmail,
        },
        {
            type: 'list',
            message: 'Please choose a license from the list;',
            name: 'license',
            choices: licenses,     
     },
])

.then((response) => {
    const markdown = generateMarkdown(response)
    fs.writeFile(`${response.name}.md`,
    markdown,
    (err) => err ? console.error(err) : console.log('Success'))   

    fs.readFile(`${response.name}.md`,
    'utf-8',
    (err, data) => {
        if (err) {
            console.error(err)
        } else {

    setIcon(response)
    const position = data.indexOf('## Contributions')
    const badge = `[![License](${licIcon})](${licLink})`
    const badgePosition = data.slice(0, position) + badge + "\n\n" + data.slice(position)
    fs.writeFile(`${response.name}.md`, 
    badgePosition,
    (err) => err ? console.error(err) : console.log('Success'))   
 }
})
})



// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init()
