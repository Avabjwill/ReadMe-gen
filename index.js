//Declaring variables 

// used #discoverFredrickDouglas as guide for HW assignment
const fs = require("fs");
const inquirer = require("inquirer");
const generator = require("./fileGenerator");

inquirer.prompt(quesProv).then(function(response) {
    console.log(response);
    
     const detail = generator(response);
     console.log(detail);
      fs.writeFile("./ReadMe.md", detail, function(error)){
          if (err) 
           return err
          console.log("All Good to Go!");
      });
 } ); 

// create serires of questions for user
let quesProv = [
    {
        type: "input",
        message: "What would you like to name your Repository?",
        name: "title"
    },{
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },{
        type: "input",
        message: "Sive your GitHub profile link.",
        name: "GitHub"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "list",
        name: "license",
        message: "Select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },{
        type: "input",
        message: "Describe the repository.",
        name: "description"

    },{
        type: "input",
        message: "Can others can contribute.",
        name: "contribute"
    },{
        type: "input",
        message: "State any test(s) require (1/3).",
        name: "test"
    },{
        type: "input",
        message: "State any test(s) require(2/3).",
        name: "test2"
    },{
        type: "input",
        message: "State any test(s) require (3/3).",
        name: "test3",
    },{
        type: "input",
        message: "State your accomplishments.",
        name: "accomplish"
    },{
        type: "input",
        message: "State provide a screenshot.",
        name: "scriptjs"
    },{
        type: "input",
        message: "State provide a screenshot.",
        name: "fileGnerator"
    },{
        type: "input",
        message: "State provide a screenshot.",
        name: "ReadMe"
    },{
        type: "input",
        message: "Two references .",
        name: "refer"
    }
];