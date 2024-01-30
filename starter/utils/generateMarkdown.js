// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = '';
  if (data.license !== 'None') {
    licenseBadge = `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
  }

  return `# ${data.title}
${licenseBadge}

## Description 
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact [${data.github}](https://github.com/${data.github}) directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
