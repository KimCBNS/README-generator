// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;

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
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'phone', 'telekinesis'],
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// fs write file (be sure to include the file path dist/readme.md)
// create the folder first


// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    const filename = `${data.title.toLowerCase().split(' ').join('')}.json`;
console.log(data);
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

  //generateMarkdown('test');
}

// do inquire prompt
//get answers
// go to markdown
//write to .md file
// two readmes (mine and the created one! put in another folder examples (use dist for distribution) folder cause it will have the same name of readme)
//generateMarkdown;
// Fnction call to initialize app

init();

// console.log("test");
// 