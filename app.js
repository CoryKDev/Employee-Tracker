const db = require("./db");
const inquirer = require("inquirer");
const connection = require("./db/connection");
const mysql = require("mysql");
const {insertRole} = require("./db");



function startPrompt() {

    inquirer
        .prompt({
            message: "Please select an option.",
            name: "option",
            type: "list",
            choices: [
                "VIEW_DEPARTMENT",
                "VIEW_ROLE",
                "VIEW_EMPLOYEES",
                "CREATE_ROLE",
                "CREATE_DEPARTMENT",
                "CREATE_NEW_EMPLOYEE",
                "EXIT_APP"
            ]
        })
        .then((res) => {

            switch(res.action) {
                case "VIEW_DEPARTMENT":
                    viewDepartment();
                    return;

                case "VIEW_ROLE":
                    viewRoles();
                    return;
                
                case "VIEW_EMPLOYEES":
                    viewEmployees();
                    return;
                case "CREATE_ROLE":
                    createRole();
                    return;
                case "CREATE_DEPARTMENT":
                    createDepartment();
                    return;

                case "CREATE_NEW_EMPLOYEE":
                    addEmployee();
                    return;

                default:
                    connection.end();
            }
        })
}

function viewDepartment(){};

function viewRoles(){};

function viewEmployees(){};

function createDepartment(){};

function createRole(){};

function addEmployee(){};




startPrompt();