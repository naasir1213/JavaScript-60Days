/*What is Hoisting?
Hoisting is a javascript behaviour of processing variable and function declrations before executing the code in their scope
We can access a var variable before its declaring but and get undefined
Example-var */

console.log(employee);
var employee="Naasir";  //Undefined
//How the javascript will treat
var employee;
console.log(employee); //Undefined
employee="Naasir"; 

//Example-2-let
console.log(employee1);
let employee1="Naasir"; //Reference Error

//Example 3: const
console.log(employee2);

const employee2 = "Naasir"; //Reference Error
/*let and const are also hoisted.



But they cannot be accessed before their declarations are evaluated.



The period between entering the scope and executing the declaration is called the Temporal Dead Zone (TDZ).

console.log(a);
var a = 10;

console.log(b);
let b = 20;

console.log(c);
const c = 30;
Step 1 – JavaScript processes declarations

Conceptually, the execution behaves like this:
var a;  // Initialized with undefined

// b and c are hoisted but remain uninitialized
// until their declarations are evaluated.


Step 2 – Execute the first statement
console.log(a);


Output:
undefined


Why? Because var is initialized with undefined during its declaration processing.

Step 3 – Execute the second statement
var a = 10;


Now a becomes 10.

Step 4 – Execute the third statement
console.log(b);


Output:
ReferenceError


Why? Because b is in the Temporal Dead Zone.

Step 5 – What happens next?

JavaScript execution stops because of the uncaught ReferenceError.

Therefore:
console.log(c);


Never executes. */

//Function Declaration
//Calling a function before its declaration is valid in javascript

displayEmployeeName();
function displayEmployeeName(){
    console.log("Employee Name: Naasir");
}

//Function declarations are fullly hoisted in javascript.Javascript makes a function available before reaching its declaration during execution

//Function Expression
//A function expression stores a function in a variable
displayMessage();
var displayMessage=  function(){
    console.log("Hello Naasir");  //TypeError:displayMessage is not a function

 }
/*
Why?
- During setup, displayMessage is initialized with undefined.
- The first statement tries to call undefined as a function.
- JavaScript throws a TypeError.
- The assignment is never reached.
*/

//Function Expression with let
displayMessage();

let displayMessage = function() {
    console.log("Hello Naasir");
};
//ReferenceError:Cannot access 'displayMessage' before initialization
/*
Why?
- let is hoisted but remains uninitialized in the TDZ.
- JavaScript encounters the function call before initialization.
- It throws a ReferenceError.
For the const also will get the same error.
*/
/*
Day 01–03: Mixed Coding Revision
Challenge 1 of 5
Topic: Variables, data types and operators
Imagine you are developing an employee salary calculation program.

Requirements:
1. Declare an employee name.
2. Declare the employee's basic salary.
3. Calculate a 10% bonus.
4. Calculate the total salary.
5. Check whether the total salary is greater than or equal to 50,000.
6. Print the employee name, bonus, total salary and eligibility status.
Expected output format:
Employee: Naasir
Basic Salary: 45000
Bonus: 4500
Total Salary: 49500
Eligible: false
*/
const employeeName="Naasir";
let basicSalary=45000;
let bonusSalary=basicSalary*10/100;
let totalSalary=basicSalary+bonusSalary;

console.log(`Employee Name: ${employeeName}`);
console.log(`Basic Salary: ${basicSalary}`);
console.log(`Bonus: ${bonusSalary}`);
console.log(`Total Salary: ${totalSalary}`);
if(totalSalary>=50000){
    console.log("Eligible: true");
}
else{
    console.log("Eligible: false");
}