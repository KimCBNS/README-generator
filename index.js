// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
const path = require('path');

// Imports the generateMarkdown module exported from generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown')

// Defines the directory and file paths
const directoryPath = path.join(__dirname, 'dist');
const filePath = path.join(directoryPath, 'README.md');


// Creates an array of questions for user input - each question has an identifier eg: title
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a detailed description of your project (include details about your motivation for building the project and the problem you are solving.)'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions: '
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information: '
  },
  { // uses a list to give the user a choice
    type: 'list',
    name: 'license',
    message: 'Select your application license:',
    choices: [
      'MIT',
      'GNU GPLv3',
      'Apache 2.0',
      'BSD 3-Clause',
      'None'
    ]
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Include the tests needed to verify your application is successful:'
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Were there other contributors you would like to recognize? If so provide the information here: '
  },
  {
    type: 'input',
    name: 'github',
    message: 'Provide your gitHub user name: '
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your contact email: '
  }
];

// This is a function to write README file
function writeToFile(NewData) { 
// Create the directory (first check to see if it exists) and then write the file using promises

const doesDirectoryExist = (directory) => {
  return fs.access(directory)
    .then(() => {
      console.log(`Directory '${directory}' already exists.`);
    })
    .catch(() => {
      return fs.mkdir(directory, { recursive: true })
        .then(() => {
          console.log(`Directory '${directory}' created.`);
        });
    });
};

// Ensure the directory exists (run the check function) and then write the file
doesDirectoryExist(directoryPath)
  .then(() => {
    const readmeContent = NewData;
    return fs.writeFile(filePath, readmeContent);
  })
  .then(() => {
    console.log(`README.md has been generated in ${directoryPath}`);
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
  });
};

// Initialize the app
function init() {
  // runs the prompt to go through the questions and store the answers in a data object
  inquirer
    .prompt(questions) 
    .then((data) => {
      // this takes the data and uses it to generate markdown data
      const NewData = generateMarkdown(data);
      // this takes the markdown data and calls the function to create it as a file
      writeToFile(NewData);
    });
}

init();

