const fs = require("fs");
const readline = require("readline");

const DATA_FILE = "employees.json";

function loadEmployees() {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE));
}

function saveEmployees(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

let employees = loadEmployees();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateId() {
    return Date.now().toString();
}

function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== "";
}

function showMenu() {
    console.log("\nEmployee Management System");
    console.log("1. Add Employee");
    console.log("2. List Employees");
    console.log("3. Update Employee");
    console.log("4. Delete Employee");
    console.log("5. Exit");

    rl.question("Select an option: ", handleMenu);
}

function handleMenu(choice) {
    switch (choice) {
        case "1": addEmployee(); break;
        case "2": listEmployees(); break;
        case "3": updateEmployee(); break;
        case "4": deleteEmployee(); break;
        case "5": rl.close(); break;
        default:
            console.log("Invalid choice!");
            showMenu();
    }
}

function addEmployee() {
    rl.question("Employee Name: ", name => {
        rl.question("Position: ", position => {
            rl.question("Salary: ", salary => {

                if (!name || !position || !isValidNumber(salary)) {
                    console.log("Invalid Input!");
                    return showMenu();
                }

                const employee = {
                    id: generateId(),
                    name,
                    position,
                    salary: Number(salary)
                };

                employees.push(employee);
                saveEmployees(employees);

                console.log("Employee Added!");
                showMenu();
            });
        });
    });
}

function listEmployees() {
    console.log("\nEmployee List:");

    if (employees.length === 0) {
        console.log("No Employees Found");
    } else {
        employees.forEach(emp => {
            console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
        });
    }

    showMenu();
}

function updateEmployee() {
    rl.question("Enter Employee ID: ", id => {
        const emp = employees.find(e => e.id === id);

        if (!emp) {
            console.log("Employee Not Found");
            return showMenu();
        }

        rl.question("New Name: ", name => {
            rl.question("New Position: ", position => {
                rl.question("New Salary: ", salary => {

                    if (name) emp.name = name;
                    if (position) emp.position = position;
                    if (isValidNumber(salary)) emp.salary = Number(salary);

                    saveEmployees(employees);
                    console.log("Employee Updated!");
                    showMenu();
                });
            });
        });
    });
}

function deleteEmployee() {
    rl.question("Enter Employee ID: ", id => {

        const index = employees.findIndex(e => e.id === id);

        if (index === -1) {
            console.log("Employee Not Found");
        } else {
            employees.splice(index, 1);
            saveEmployees(employees);
            console.log("Employee Deleted!");
        }

        showMenu();
    });
}

showMenu();
