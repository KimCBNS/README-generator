// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string FOR NONE
function renderLicenseBadge(license) {}
 // hint: if license!=none
 // hint : return link to make a badge{renderLicenseLink(data.license)}
 // hint: return ` ![Github license](https://img.shields.io/badge/license-${license.replace( / /g, "%20")}-blue.svg)`;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// check this site: https://www.markdownguide.org/basic-syntax/
// learn table of contents in markdown
// hint for table of contents links: - [Installation](#installation-instructions)
// hint section: ## License\nThis project is write the sentence here...

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)"

## Introduction
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License - see the [LICENSE](LICENSE) file for details.

## Tests
${data.tests}

## Contributing
${data.contributors}

## Acknowledgements
Credits to people and resources.

## Contact
To check out ${data.github}'s pages: https://github.com/${data.github}
To get in touch to comment and make suggestions: reach out to: ${data.email}

`
};


module.exports = generateMarkdown;

// bonus add a date field in the application
// bonus add the author's name in the listing
