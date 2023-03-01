// Access FS module
import fs from "fs";
// Access Inquirer Module
import inquirer from "inquirer";
// Access the generateMarkdown JS file
import generateMarkdown from "./utils/generateMarkdown.js";

// Ternary operator to check if the the userInput has a value or not
function validateUserInput(input) {
  return input !== ""
    ? true
    : "I did not detect a value, please enter a valid input";
}
// Ternary operator to check if the the userInput includes a @ or not
function validateEmail(input) {
  return input.includes("@")
    ? true
    : "I did not detect a valid email address, please try again";
}

// List of licenses offered to the user
const licenses = ["MIT", "CCO-1.0", "EPL 1.0"];
// An object which includes the license badges and links for the ReadMe
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
];

// Setting variables for use in later functions
let licIcon = "";
let licLink = "";

// Function to set a variable for the corresponding license badge once a user has chosen a license
function setIcon(response) {
  if (response.license === licenses[0]) {
    licIcon = licenseInfo[0].icon;
    licLink = licenseInfo[0].link;
  } else {
    if (response.license === licenses[1]) {
      licIcon = licenseInfo[1].icon;
      licLink = licenseInfo[1].link;
    } else {
      licIcon = licenseInfo[2].icon;
      licLink = licenseInfo[2].link;
    }
  }
  return;
}

// The inquirer module will prompt the user the inputs
// Each input is then validated
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
      validate: validateUserInput,
    },
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
      validate: validateUserInput,
    },
    {
      type: "input",
      message: "Please input your description:",
      name: "description",
      validate: validateUserInput,
    },
    {
      type: "input",
      message: "Please detail installation instructions:",
      name: "installation",
      validate: validateUserInput,
    },
    {
      type: "input",
      message: "Please detail usage information:",
      name: "usage",
      validate: validateUserInput,
    },

    {
      type: "input",
      message: "Please detail contribution guidelines:",
      name: "contributions",
      validate: validateUserInput,
    },
    {
      type: "input",
      message: "Please detail test instructions:",
      name: "tests",
      validate: validateUserInput,
    },
    {
      type: "input",
      message: "Please enter your github username:",
      name: "github",
      validate: validateUserInput,
    },
    {
      type: "input",
      message: "Please enter your email address:",
      name: "email",
      validate: validateEmail,
    },
    {
      type: "list",
      message: "Please choose a license from the list;",
      name: "license",
      choices: licenses,
    },
  ])
  // Once a the user has responded to the prompts,
  .then((response) => {
    // Creates a variable which adds the user inputs to the imported function
    const markdown = generateMarkdown(response);
    // Writes the markdown file and names it using UserInput. writeFileSync stops all code until it has finished creating the file, this stops the rewrite from causing an error
    fs.writeFileSync(
      `${response.title}.md`,
      // Adds the markdown variable as the data for the markdown file
      markdown
    );
    // Reads the newly created file
    fs.readFile(
      `${response.title}.md`,
      // Encoding standard
      "utf-8",
      // Checks if there is an error, if there is it lets the user know in the console log
      // If there is not an error, it sets the information as "data"
      (err, data) => {
        if (err) {
          console.error(err);
        } else {
          // Runs the setIcon function with the userInput
          setIcon(response);
          // Finds a position in the created document
          const position = data.indexOf("## Contributions");
          // Creates the license "button" and adds the hyperlink
          const badge = `[![License](${licIcon})](${licLink})`;
          // Creates a variable with the created document, including new badge and its position
          const badgePosition =
            data.slice(0, position) + badge + "\n\n" + data.slice(position);
          // Rewrites the file
          fs.writeFile(
            `${response.title}.md`,
            // Adds data into the file
            badgePosition,
            // Checks if the file was written successfully and console.logs the answer
            (err) => (err ? console.error(err) : console.log("Success"))
          );
        }
      }
    );
  });
