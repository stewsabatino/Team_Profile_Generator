const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const renderHTML = require('./utils/generateHtml')

const employees = []

const managerQuestions = [
    {
        message: "What is the team manager's name?",
        name: "name"
    },{
        message: "What is the employee ID of the team manager?",
        name: "ID"
    },{
        message: "What is the team manager's email address?",
        name: "email"
    },{
        message: "What is the team manager's office number?",
        name: "officeNumber"
    }
]

const engineerQuestions = [
    {
        message: "What is the team members name?",
        name: "name"
    }, {
        message: "What is the team members ID?",
        name: "ID"
    }, {
        message: "What is the team members email address?",
        name: "email"
    }, {
        message: "What is their Github profile?",
        name: "github"
    },
]

const internQuestions = [
    {
        message: "What is the team members name?",
        name: "name"
    }, {
        message: "What is the team members ID?",
        name: "ID"
    }, {
        message: "What is the team members email address?",
        name: "email"
    }, {
        message: "What school do they go to?",
        name: "school"
    },
]


const teamBuildQuestion = [{
        type: "list",
        message: "Would you like to add an engineer, intern or are you finished building your team?",
        choices: ["engineer", "intern", "finished"],
        name: "choices"
    }
]


function writeToFile(fileName, data) {
    // makes file, if error occurs than console.log the error
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Success! Your team is finished.")
    })
}

function chooseMember(data) {
    switch (data.choices) {
    case "engineer":
        // engineer questions
        inquirer.prompt(engineerQuestions)
        // return data
        .then((engineerData) => {
            const engineer = new Engineer(engineerData.name, engineerData.ID, engineerData.email, engineerData.github)
            employees.push(engineer)
            // go back to team build question
            chooseTeam()
        })
        break
    case "intern":
        // intern questions
        inquirer.prompt(internQuestions)
        // return data
        .then((internData) => {
            const intern = new Intern(internData.name, internData.ID, internData.email, internData.school)
            employees.push(intern)
            // go back to team build question
            chooseTeam()
        })
        break
    case "finished":
        console.log(employees)
        console.log("Success! Your team is finished.")
        console.log(employees[0].getRole())
        writeToFile("index.html", renderHTML(employees))
        
    }
}

function chooseTeam() {
    inquirer.prompt(teamBuildQuestion)
    .then((data) => {
        chooseMember(data)
    })
}

const init = () => {
    inquirer.prompt(managerQuestions)
    // make object and write it to library manager file
    .then((data) => {
        const manager = new Manager(data.name, data.ID, data.email, data.officeNumber)
        // create manager using this data
        employees.push(manager)
        console.log(employees)
        // Add member
        chooseTeam()
    })
}

init()

