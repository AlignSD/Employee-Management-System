const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const { count } = require("console");
const { stringify } = require("querystring");

var connection = mysql.createConnection({
    host: "localhost",
    
    port: 3306,

    user: "root",

    password: "",

    database: "emsdatabase"
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
                "View Total Budget Of A Department",
                "Exit"

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

                case "Exit":
                    console.log("You Chose " + answer.action);
                    process.exit();
                    
            }
        })
}

// ======View Functions======

function viewDepartments() {
    connection.query("SELECT * FROM department", (err , res) => {
        if(err) throw err;
        console.table(res);
        runStart();
    });
    

}
function viewRoles() {
    connection.query("SELECT * FROM role", (err , res) => {
        if(err) throw err;
        console.table(res);
        runStart();
    });
    

}
function viewEmployees() {
    connection.query("SELECT * FROM employee", (err , res) => {
        if(err) throw err;
        console.table(res);
        runStart();
    });
    

}

// ======Add Functions======

function addRoles() {
    connection.query("SELECT * FROM department", (err , res) => {
        if(err) throw err;
        

    inquirer
        .prompt ([{
            name: "newRole",
            type: "input",
            message: "What Role Would You Like To Add? Type 'Exit' To Return To The Home Screen", 

        },
        {
            name: "departmentRole",
            type: "list",
            choices: res,
            message: "What Department Would You Like To Add This Role To?"

        }
    ])
        .then((answer) => {
            
            switch (answer.newRole.toLowerCase()) {
                case "exit":
                    console.log("You Chose " + answer.newRole);
                    runStart();
                
                default: 
                console.log("You Chose " + answer.newRole);
                console.log(answer.departmentRole);
                // connection.query(`INSERT INTO department (name) VALUES ("${answer.newRole}")`, 
                //      function(err, res) {
                //         if (err) throw err;
                //         console.log(res.affectedRows + " Department inserted!\n");
                //         // Call updateProduct AFTER the INSERT completes
                        runStart();
                }    
        });
    })
}

function addDepartment() {
    inquirer
        .prompt ({
            name: "newDepartment",
            type: "input",
            message: "What Would You Like To Name Your New Department? Type 'Exit' To Return To The Home Screen", 

        })
        .then((answer) => {
            
            switch (answer.newDepartment.toLowerCase()) {
                case "exit":
                    console.log("You Chose " + answer.newDepartment);
                    runStart();
                
                default: 
                console.log("You Chose " + answer.newDepartment);
                connection.query(`INSERT INTO department (name) VALUES ("${answer.newDepartment}")`, 
                     function(err, res) {
                        if (err) throw err;
                        console.log(res.affectedRows + " Department inserted!\n");
                        // Call updateProduct AFTER the INSERT completes
                        runStart();
                }    
            );

        }
                
    })
        
};