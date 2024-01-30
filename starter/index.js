const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is your project installed?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project used?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How is your project tested?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    }
  ];
  
  // Function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log('Successfully wrote to ' + fileName);
    });
  }
  
  // Function to initialize program
  function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile("README.md", readmeContent);
    });
  }
  
  // Function call to initialize program
  init();
