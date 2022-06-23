const inquirer = require("inquirer")
const Manager = require("./lib/Manager");

const teamMemeberObjArr = [];

const init = () => {
    const createManager = () => {
        inquirer.prompt([
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
            teamMemeberObjArr.push(manager)
            addEmployees()
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
  .then(answer => {
      switch (answer.choice) {
          case 'Engineer':
              createEngineer()
              break;
      }
  })
    }









    createManager()
};
    }

init()