# readme-generator
the 9th challenge task for the skills bootcamp, in node js

## Description 

This task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project. When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project. 

* As a developer, I want a README generator so that I can quickly create a professional README for a new project

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
The application will be invoked by using the following command:

```bash
node index.js
```

* include a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* repo to include a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

## Usage 

 When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

* A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.


## License
This project is licensed under the MIT license.

## Contributing
Others can contribute freely. 

## Tests
The project can be tested by putting in the commands, and questions, after which a readme.md is generated. 

## Questions
If you have any questions about the repo, open an issue or contact [zhaolucas](https://github.com/zhaolucas) directly at lucaszhaopeiqi@hotmail.com.


---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
