const inquirer = require("inquirer")
const fs = require('fs')
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern")
const renderTeam = require("./src/html-templates")

const teamMemberObjArr = [];

const init = () => {
    const createManager = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "id",
                    message: "What is the Managers Id?",
                },
                {
                    type: "input",
                    name: "name",
                    message: "What is the Managers name?",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the Managers email?",
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the Managers Offie Number?",
                },
            ])
            .then(answers => {
                const manager = new Manager(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.officeNumber
                )
                teamMemberObjArr.push(manager)
                addEmployees();
            })
    };


    function addEmployees() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'What employees would you like to add?',
                    name: 'choice',
                    choices: ['Engineer', 'Intern', "I'm Done"],
                },
            ])
            .then((answer) => {
                switch (answer.choice) {
                    case "Engineer":
                        createEngineer();
                        break;

                    case "Intern":
                        createIntern();
                        break;

                    default:
                        buildTeam();
                        break;
                }
            });


    
    function createEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "id",
                    message: "What is the Engineer Id?",
                },
                {
                    type: "input",
                    name: "name",
                    message: "What is the Engineer name?",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the Engineer email?",
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the Engineers Github?",
                },
            ])
            .then((answers) => {
                const engineer = new Engineer(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.github
                )
                teamMemberObjArr.push(engineer);
                addEmployees();
            });
        };
        function createIntern() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "id",
                        message: "What is the Interns Id?",
                    },
                    {
                        type: "input",
                        name: "name",
                        message: "What is the Interns name?",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the Interns email?",
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What is the Interns school?",
                    },
                ])
                .then((answers) => {
                    const intern = new Intern(
                        answers.id,
                        answers.name,
                        answers.email,
                        answers.school
                    )
                    teamMemberObjArr.push(intern);
                    addEmployees();
                });
        };
    }
        function buildTeam() {
            fs.writeFile("./dist/index.html", renderTeam(teamMemberObjArr), (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log('Addedd team members!')
                }
            })
        }

        createManager();
    }

    init()