const fs = require("fs")
const inquirer = require("inquirer");
const Manager = require("./assets/js/classes/manager");

const newStaffData = [];

const questions = [
    {
        type: "input",
        message: "Please enter your name:",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter your ID number:",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter your email:",
        name: "email"
    },
    {
        type: "list",
        message: "Choose your role from the following:",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
    }
]
if (answers.role === "Manager") {
    managerQuestion = {
        type: "input",
        message: "what is your office number?",
        name: "office"
    }
    const managerAnswers = await inquirer.prompt(managerQuestion)

    addManager = new Manager(
        answers.id,
        answers.name,
        answers.email,
        managerAnswers.office
    );
    newStaffData.push(addManager)
}







async function askTheQuestions() {
    try {
        const userAnswers = await inquirer.prompt(questions);
        console.log("What you told me: ", userAnswers)
        } catch (error) {
            console.log(error)
        }
    }
askTheQuestions();
