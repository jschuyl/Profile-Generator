const fs = require("fs")
const inquirer = require("inquirer");
const Manager = require("./assets/js/classes/manager");

const newStaffData = [];

const questions = async () => {
    const answers = await inquirer
    .prompt([
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
    ])
    if (answers.role === "Manager") {
        managerQuestion = await inquirer
            .prompt([
                 {
                    type: "input",
                    message: "what is your office number?",
                    name: "office"
                }
            ])   

        const addManager = new Manager(
            answers.id,
            answers.name,
            answers.email,
            managerQuestion.office
        );
        newStaffData.push(addManager)
        console.log(newStaffData)
    }
}

async function askTheQuestions() {
    await questions()
}
askTheQuestions();

