function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ## Description
  ${answers.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#Questions)
  * [Credits](#credits)
  
  ## Installation
  ${answers.installation}

  ## Tests
  ${answers.tests}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Questions:
  ${answers.questions}
  * GitHub: [${answers.github}](
  * Email: ${answers.email}
  * LinkedIn: [${answers.linkedin}](
  
  * Credits
  * ${answers.credits}
  * 
  * Deployed Application: (
  `
};

module.exports = generateMarkdown;