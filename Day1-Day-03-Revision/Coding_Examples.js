/*Employee Salary Calculator

Write a JavaScript program using the following requirements:
1. Declare an employee name.
2. Declare a basic salary of 30000.
3. Declare a bonus of 5000.
4. Calculate the total salary.
5. Calculate a 10% tax on the total salary.
6. Calculate the final salary after deducting tax.
7. Print the employee name, total salary, tax amount and final salary.
Expected output:
Employee Name: Naasir
Total Salary: 35000
Tax Amount: 3500
Final Salary: 31500  */

const employee_name="Naasir";
const basic_salary=30000;
const bonus=5000;
total_salary=basic_salary+bonus;
tax=total_salary*10/100;
final_salary=total_salary-tax;

console.log(`Employee Name: ${employee_name}`);
console.log(`Total Salary: ${total_salary}`);
console.log(`Tax Amount: ${tax}`);
console.log(`Final Salary: ${final_salary}`);

/*
Round 2 — Coding Challenge 2
Intermediate
Conditions + Comparison + Logical operators

Problem: Employee Eligibility Checker

Write a JavaScript program to determine whether an employee is eligible for a performance bonus.

Requirements:
- Employee experience must be at least 3 years.
- Performance rating must be at least 4.
- Both conditions must be satisfied.
Use these values:
const employeeName = "Naasir";
const experience = 5;
const performanceRating = 4;


Expected output:
Employee Name: Naasir
Experience: 5 years
Performance Rating: 4
Bonus Eligibility: Eligible


If either condition fails, print:
Bonus Eligibility: Not Eligible
*/
const employeeName = "Naasir";
const experience = 5;
const performanceRating = 4;

console.log(`Employee Name: ${employeeName}`);
console.log(`Experience: ${experience} Years`);
console.log(`Performance Rating: ${performanceRating}`);
if(experience>=3 && performanceRating>=4){
    console.log("Bonus Eligibility: Eligible");
}
else{
    console.log("Not elgible")
}

/*
Round 2 — Coding Challenge 3
Advanced
Objects + Optional chaining + Nullish coalescing

Problem: Employee Information Processing

Consider this API response:
const response = {
    data: {
        employee: {
            id: 101,
            name: "Naasir",
            salary: 50000,
            department: null
        }
    }
};


Write a JavaScript program that:
1. Safely retrieves the employee ID.
2. Safely retrieves the employee name.
3. Retrieves the department, using "Unassigned" as the default if it is null or undefined.
4. Calculates a 10% salary bonus.
5. Calculates the total salary (salary + bonus).
6. Prints all five values.
Expected output:
Employee ID: 101
Employee Name: Naasir
Department: Unassigned
Bonus: 5000
Total Salary: 55000


Rules:
- Use optional chaining (?.).
- Use nullish coalescing (??).
- Use const wherever possible.
- Do not hardcode the calculated bonus or total salary.
*/
const response = {
    data: {
        employee: {
            id: 101,
            name: "Naasir",
            salary: 50000,
            department: null
        }
    }
};
console.log(response?.data?.employee?.id);
console.log(response?.data?.employee?.name);
console.log(response?.data?.employee?.department?? "Unassigned");
//Calculating bonus and total salary
const bonus1=response?.data?.employee?.salary*10/100;
const total_salary=response?.data?.employee?.salary+bonus1;
console.log(`Bonus: ${bonus1}`);
console.log(`Total Salary: ${total_salary}`);