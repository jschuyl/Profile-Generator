const fs = require("fs")
const inquirer = require("inquirer");
const Engineer = require("./assets/js/classes/engineer");
const Intern = require("./assets/js/classes/intern");
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
                    message: "Please enter your office number:",
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
    if (answers.role === "Engineer") {
        engineerQuestion = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter your Github username WITHOUT the @ symbol:",
                    name: "github"
                }
            ])
        const addEngineer = new Engineer(
            answers.id,
            answers.name,
            answers.email,
            engineerQuestion.github
        );
        newStaffData.push(addEngineer)
        console.log(newStaffData)
    }
    if (answers.role === "Intern") {
        internQuestion = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter your school:",
                    name: "school"
                }
            ])
        const addIntern = new Intern(
            answers.id,
            answers.name,
            answers.email,
            internQuestion.school
        );
        newStaffData.push(addIntern)
        console.log(newStaffData)
    }
}

async function askTheQuestions() {
    await questions()

    const theFellowshipGrows = await inquirer
        .prompt([
            {
                type: "list",
                message: "Is there another team member?",
                choices: ["Yes, add another member to my team", "No, the team is complete"],
                name: "youHaveMy"
            }
        ])
        if (theFellowshipGrows.youHaveMy === "Yes, add another member to my team") {
            return askTheQuestions();
        }
        return theFellowshipOfTheTeam
}
askTheQuestions();

function theFellowshipOfTheTeam () {
    fs.writeFileSync(
        
    )
}