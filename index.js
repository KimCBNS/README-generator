// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;

// the new file will need to be stored in a directory so it doesn't


const directoryPath = './myDirectory';
console.log(directoryPath);
// Use fs.promises.mkdir() to create the directory asynchronously
// fs.promises.mkdir(directoryPath)
//   .then(() => console.log(`Directory '${directoryPath}' created.`))
//   .catch(err => console.error(`Error creating directory: ${err.message}`));

// import the generateMarkdown module exported from generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
  // make a bunch of these one is not an input (type list - licensing included make sure choice of none is included)
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
  {
    type: 'list',
    name: 'license',
    message: 'Select your application license:',
    choices: [
      'MIT',
      'GNU GPLv3',
      'Apache 2.0',
      'BSD 3-Clause',
      'ISC',
      'Unlicense',
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }
// fs write file (be sure to include the file path dist/readme.md)
// create the folder first


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions) // this runs through the questions and saves as data object
    .then((data) => {
      // this is the tester to create a file for the data but we need to do
      // an inbetween step to convert to markdown
      const filename = '.\dist\README.md';
      const NewData = generateMarkdown(data);
      //`${data.title.toLowerCase().split(' ').join('')}.json`;
      console.log(NewData);
      fs.writeFile(filename, JSON.stringify(NewData, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    });


}


init();

