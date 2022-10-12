const fs = require("fs")
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "What is your first name?",
        name: "firstName"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "lastName"
    },
    {
      type: "",  
    }
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
