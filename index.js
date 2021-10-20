const inquirer = require('inquirer')
const fs = require('fs')

const memberQuestions = [
    {
        message: "What is the team members name?",
        name: "name"
    }, {
        message: "What is the team members ID?",
        name: "ID"
    }, {
        message: "What is the team members email address?",
        name: "email"
    }
]


function addMember(name, ID, email) {
    inquirer
        .prompt(memberQuestions)
    this.name = name;
    this.id = ID;
    this.email = email;
}

const managerQuestions = [
    {
        message: "What is the team manager's name?",
        name: "managerName"
    },{
        message: "What is the employee ID of the team manager?",
        name: "managerID"
    },{
        message: "What is the team manager's email address?",
        name: "managerEmail"
    },{
        message: "What is the team manager's office number?",
        name: "officeNumber"
    }
]

const teamBuildQuestion = [{
        type: "list",
        message: "Would you like to add an engineer, intern or are you finished building your team?",
        choices: ["engineer", "intern", "finished"],
        name: "choices"
    }
]


function chooseMember(data1) {
    switch (data1.choices) {
    case "engineer":
        // addMember function
        inquirer.prompt(memberQuestions)
        // engineer methods
        .then((someData) => {
            console.log(someData)
            inquirer.prompt([
            {
                message: "What is their Github profile?",
                name: "github"
            },

        ])})
        // go back to team build question
        break
    case "intern":
        // addMember function
        inquirer.prompt(memberQuestions)
        // intern methods
        inquirer.prompt([
            {
                message: "What school do they go to?",
                name: "school"
            },

        ])
        // go back to team build question
        break
    case "finished":
        console.log("Success! Your team is finished.")
        // fs to write an html and have css applied
    }
}

const init = () => {
    inquirer.prompt(managerQuestions)
    .then((data) => {
        console.log(data)
        // create manager using this data
        // Add member?
        inquirer.prompt(teamBuildQuestion)
        .then((data1) => {
            chooseMember(data1)
        })
    })
}

init()

