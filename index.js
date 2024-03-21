const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
      const promptUser = () => {
        return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "information on how the project was created.",
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions.",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide information on how this project can be used.",
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this project?",
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide test instructions.",
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license for your project.",
            choices: ["MIT", "Apache", "GPL", "BSD", "None"]
        },
        {
            type: "input",
            name: "github",
            message: "Please provide your GitHub username.",
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email address.",
        },
        {
            type: "input",
            name: "linkedin",
            message: "Please provide your LinkedIn URL.",
        },
        {
            type: "input",
            name: "credits",
            message: "Please provide any credits or acknowledgements.",
        },
    ])
  };

// function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
        .then((answers) => {
            fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log('Success!'))
        })
}

const init = async () => {
  console.log("Welcome to the README Generator!");
  try {
    const answers = await promptUser();
    const generateMarkdown = generateMarkdown(answers);
    writeToFile("README.md", generateMarkdown);
    console.log("Your README has been generated!");
} catch (error) {
    console.log(error);
}
};



// function call to initialize program
init();
