// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license( license!=none), return an empty string FOR NONE
// hint : return link to make a badge{renderLicenseLink(data.license)}
// return ` ![Github license](https://img.shields.io/badge/license-${license.replace( / /g, "%20")}-blue.svg)`;
function renderLicenseBadge(license) {

  let licenseBadge = '';

  switch (license) {
    case 'MIT':
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'GNU GPLv3':
      licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'Apache 2.0':
      licenseBadge = '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'BSD 3-Clause':
      licenseBadge = '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = '![License: CC0 1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)';
      break;
    case 'None':
      licenseBadge = '';
      break;
    default:
      licenseBadge = '';
  }

  return `
  ${licenseBadge}
`
};



function renderLicenseLink(license) { 
// check this site: https://www.markdownguide.org/basic-syntax/
// learn table of contents in markdown
// hint for table of contents links: - [Installation](#installation-instructions)
// hint section: ## License\nThis project is write the sentence here...
  let licenseLink = '';

  switch (license) {
    case 'MIT':
      licenseLink = '[MIT License](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU GPLv3':
      licenseLink = '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache 2.0':
      licenseLink = '[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)';
      break;
    case 'BSD 3-Clause':
      licenseLink = '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      licenseLink = '';
  }

  return `
  ${licenseLink}
`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

# ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)"

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License - see the ${renderLicenseLink(data.license)} file for details.

## Contributing
${data.contributors}

## Tests
${data.tests}

## Questions
This project was created by: ${data.github}

To check out ${data.github}'s gitHub: https://github.com/${data.github}
To get in touch to comment and make suggestions reach out to: ${data.email}

`
};


module.exports = generateMarkdown;

// bonus add a date field in the application
// bonus add the author's name in the listing
