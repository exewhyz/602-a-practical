import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const employees = [{ id: 1, name: "Aniket" }];

function showMenu() {
  console.log("\nEmployee Management\n");
  console.log("1. Add Employee");
  console.log("2. List all employees.");
  console.log("3. Remove employee.");
  console.log("4. Exit");
  rl.question("\nChoose an option: ", handleInput);
}

function handleInput(option) {
  switch (option) {
    case "1":
      rl.question("Enter employee name: ", (name) => {
        const empId = Date.now();
        const newEmployee = {
          id: empId,
          name,
        };
        employees.push(newEmployee);
        console.log(`\nEmployee ${name} (ID: ${empId}) Added`);
        showMenu();
      });
      break;
    case "2":
      employees.forEach((emp, index) => {
        console.log(`${index + 1}. ID: ${emp.id} | NAME: ${emp.name}`);
      });
      showMenu();
      break;
    case "3":
      rl.question("Enter employee ID to remove: ", (id) => {
        employees.forEach((emp, index) => {
          if (emp.id === id) {
            employees.splice(index, 1);
            console.log(`Employee ID: ${id} removed`);
          }
        });
        showMenu();
      });
      break;
    case "4":
      rl.close();
      break;
    default:
      console.log("\nInvalid Option.");
      showMenu();
  }
}

showMenu();
