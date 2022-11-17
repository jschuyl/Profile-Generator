// npms being used
const fs = require("fs")
const inquirer = require("inquirer");
const path = require("path");
// import classes below
const Engineer = require("./assets/js/classes/engineer");
const Intern = require("./assets/js/classes/intern");
const Manager = require("./assets/js/classes/manager");
// import formatPage
const formatPage = require("./assets/js/formatPage");
// need a path output
const output = path.join("html", "index.html");

// stores answers and allows me to display info
const newStaffData = [];
// gets the necessary info from the user(s)
// only one manager please
const firstQuestion = async () =>{
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter the team Manager's name:",
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
            type: "input",
            message: "Please enter your office number:",
            name: "office"
        }
    ])
    const addManager = new Manager(
        answers.id,
        answers.name,
        answers.email,
        answers.office
    );
    newStaffData.push(addManager)
    console.log(newStaffData)
    return askTheQuestions();
}
const questions = async () => {
    const answers = await inquirer
    .prompt([
            {
                type: "list",
                message: "Choose your role from the following:",
                choices: ["Engineer", "Intern"],
                name: "role"
            },
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
                    message: "Please enter your school name:",
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
// where the questions happen
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
        } else {
            return theFellowshipOfTheTeam();
        }        
}
firstQuestion();
// builds the team page
function theFellowshipOfTheTeam () {
    const buildPage = formatPage(newStaffData);
    fs.writeFileSync(output, buildPage, (err) =>
    err ? console.error(err) : console.log("Page created")      
    )
}