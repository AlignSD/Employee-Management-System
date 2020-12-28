const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const { count } = require("console");

var connection = mysql.createConnection({
    host: "localhost",
    
    port: 3306,

    user: "root",

    password: "",

    database: "emsDataBase"
});

// Starts the app

connection.connect((err) => {
    if (err) throw err;

    runStart();
});



console.table("show tables");

// Start Function, This kicks off the initial set of questions.

function runStart() {
    inquirer
        .prompt ({
            name: "action",
            type: "list",
            message: "What Would You Like To Do?",
            choices: [
                "Add Departments",
                "Add Roles",
                "Add Employees",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employees Roles",
                "Update Employees Managers",
                "View Employees By Manager",
                "Delete Departments",
                "Delete Roles",
                "Delete Employees",
                "View Total Budget Of A Department"
            ]
        })
        .then((answer) => {
            console.log("its working");
            switch (answer.action) {
                case "Add Departments":
                    console.log("You Chose " + answer.action);
                    addDepartment();
                    break;
                
                case "Add Roles":
                    console.log("You Chose " + answer.action);
                    addRoles();
                    break;
                
                case "Add Employees":
                    console.log("You Chose " + answer.action);
                    addEmployees();
                    break;
                
                case "View Departments":
                    console.log("You Chose " + answer.action);
                    viewDepartments();
                    break;
                
                case "View Roles":
                    console.log("You Chose " + answer.action);
                    viewRoles();
                    break;
                
                case "View Employees":
                    console.log("You Chose " + answer.action);
                    viewEmployees();
                    break;
                
                case "Update Employees Roles":
                    console.log("You Chose " + answer.action);
                    updateEmployeesRoles();
                    break;
                
                case "Update Employees Managers":
                    console.log("You Chose " + answer.action);
                    updateEmployeesManagers();
                    break;
                
                case "View Employees By Manager":
                    console.log("You Chose " + answer.action);
                    viewEmployeesByManager();
                    break;
                
                case "Delete Departments":
                    console.log("You Chose " + answer.action);
                    deleteDepartments();
                    break;
                
                case "Delete Roles":
                    console.log("You Chose " + answer.action);
                    deleteRoles();
                    break;
                
                case "Delete Employees":
                    console.log("You Chose " + answer.action);
                    deleteEmployees();
                    break;
                
                case "View Total Budget Of A Department":
                    console.log("You Chose " + answer.action);
                    viewTotalBudgetOfADepartment();
                    break;
            }
        })
}

function addDepartment() {
    inquirer
        .prompt ({
            name: "newDepartment",
            type: "input",
            message: "What Would You Like To Name Your New Department?",

        })
        .then((answer) => {
            
            switch (answer.newDepartment) {
                case "Add Departments":
                    console.log("You Chose " + answer.newDepartment);
                    
                    break;
            }
})
}
