//packages needed for HTLM application
const fs = require("fs")
const inquirer = require("inquirer")

//questions to prompt the user
 inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you located?',
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Include your bio:',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn URL?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub URL?',
        },
    ])
    .then((response) => {
        console.log(response)
        fs.writeFile(`${response.name}.html`, JSON.stringify(response,null,4),errorhandle)
      });
    
      const errorhandle = (err) => {
        if (err){
            throw err;
        }
        console.log("Generating your portfolio page.")
      }

    function init() {

    }