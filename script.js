// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data //
  function collectEmployees() {
    const employees = [];
    let addEmployee = true;

    while (addEmployee) {
      const firstName = prompt('Enter the employee\'s first name:');
      const lastName =  prompt('Enter the employee\'s last name:');
      const salaryInput = prompt('Enter the employee\'s salary:');
      const salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);

      const employee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary
      };
      
      employees.push(employee);
      addEmployee = confirm('Do you want to add another employee?');
    }

    return employees;
  }


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
 let totalSalary = 0;

 for (let index = 0; index < employeesArray.length; index++) {
  
  totalSalary += employeesArray [index].salary;
  
 }

 const averageSalary = totalSalary / employeesArray.length;

 console.log(`The average salary for employee\'s is $${averageSalary.toFixed(2)}`)
};

// Select a random employee
const getRandomEmployee = function (employeesArray) { 
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  const randomEmployee = employeesArray [randomIndex];

  console.log(`Congradulations ${randomEmployee.firstName} ${randomEmployee.lastName}`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
