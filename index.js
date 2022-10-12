const fs = require("fs")
const inquirer = require("inquirer");

const openingQuestion = [
    {
        type: "list",
        message: "What is this employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
    },

]








async function askTheQuestions() {
    try {
        const userAnswers = await inquirer.prompt(openingQuestion);
        console.log("What you told me: ", userAnswers)
        } catch (error) {
            console.log(error)
        }
    }
askTheQuestions();
