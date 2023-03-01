// function to generate markdown for README
// Input fields ready for userInput and added hyperlinks to the contents table
function generateMarkdown(response) {
  return`
# ${response.title}

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

When a user chooses a license for their application from a list of options, then a badge for that license is added. ${"\n"}
License: ${response.license} ${"\n"} 
   

## Contributions <a id="contributions"></a>
${response.contributions}
  
## Tests <a id="tests"></a>
${response.tests}
## Questions <a id="questions"></a>
If you have any further questions, you can find my GitHub profile and email address below. Please reach out and I will do my best to assist.
${"\n"} GitHub Profile: 
[www.github.com/${response.github}](https://www.github.com/${response.github}) ${"\n"}
Email Address: ${response.email}
  

`
}
// Exports the data, ready to be accessed by index.js
export default generateMarkdown


