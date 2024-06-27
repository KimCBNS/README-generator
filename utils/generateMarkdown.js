// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string FOR NONE
function renderLicenseBadge(license) {}
 // hint: if license!=none
 // hint : return link to make a badge
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
  console.log("generate function ran");
//   return `# ${data.title}
  
//   // hints:  on temperal literals you can inject js at will if it is in ${}
// ${renderLicenseLink(data.license)}

// `;
}

function tests(){
  console.log("test");
}

module.exports = generateMarkdown;
