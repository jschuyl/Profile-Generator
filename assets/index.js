const fs = require("fs")
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName"
    },
    {
        type: "checkbox",
        message: "What this employee's role?",
        name: "email"
    },
    {
      type: "input",
      message: "What is your Github username?", 
      name: "github" 
    },

]










async function askTheQuestions() {
    try {
        const userAnswers = await inquirer.prompt(questions);
        console.log("What you told me: ", userAnswers)
        } catch (error) {
            console.log(error)
        }
    }
askTheQuestions();
