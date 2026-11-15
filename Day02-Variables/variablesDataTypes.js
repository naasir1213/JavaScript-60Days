//Declare a variable
var city="Hyderabad";
let salary=50000;
const company="abc";

//Understand reassignment
let salary1=50000;
salary1=60000;
console.log(salary1);
//let allows reassignment

//Practical QA Automation Example
const applicationURL="https://www.example.com";
let loginStatus=false;
loginStatus=true;

console.log(loginStatus);
console.log(applicationURL);

/*  
Write a JavaScript program to:
1. Declare a variable called testerName using let.
2. Store your name.
3. Declare a variable called experience using let.
4. Store your years of testing experience.
5. Declare a variable called isAutomationTester using const.
6. Store true.
7. Print all three variables using console.log().
Expected output format:
Tester Name: Naasir
Experience: 12
Automation Tester: true */

let testerName="Naasir";
let experience=12;
const isAutomationTester=true

console.log(`Tester Name: ${testerName}`);
console.log(`Experience: ${experience}`);
console.log(`Automation Tester: ${isAutomationTester}`);

/*
Next exercise – Intermediate
Question 2 – Variable Reassignment
Consider the following requirements:
1. Declare browserName using let and assign "Chrome".
2. Declare testStatus using let and assign "Pending".
3. Change testStatus to "Passed".
4. Change browserName to "Firefox".
5. Print both updated values.
Expected output:
Browser: Firefox
Test Status: Passed
*/

let browserName="Chrome";
let testStatus="Pending";
testStatus="Passed";
browserName="Firefox"
console.log(`Test Status: ${testStatus}`);
console.log(`Browser: ${browserName}`);

/*
Advanced thinking question
Question 3 – Predict the Output
Before executing the following code, predict what happens.
let score = 100;

score = score + 50; //150

score = score - 30;//120

console.log(score);  120

const passingScore = 40;

console.log(passingScore);


Answer these two questions:
1. What will be the final output of score?
2. What will be the output of passingScore?
*/

//Real time automation example

let actualStatusCode=200;
let expectedStatusCode="200";

console.log(typeof actualStatusCode);
console.log(typeof expectedStatusCode);

//Undefined-
let salary6;
console.log(salary6);
/*We declared the variable salary.
But we haven't assigned any value to it.
JavaScript automatically initializes the variable with undefined.*/

//Null
let value=null;
console.log(typeof value); //Object
/*This is a well-known JavaScript quirk.

Although null represents the intentional absence of a value, 
typeof null returns "object" because of a historical language behaviour.*/

/*
Real time API Testing Example

const response={
employeeName:"Naasir";
middleName:null
};
console.log(response.employeeName);
console.log(typeof response.middleName); /object
*/
/* Objects in javascript
An Object is a non-primitive data type used to store multiple related values as key-value pairs.
Imagine an employee record
const employee={
name:"Naasir",
experience:12,
role:"QA Engineer",
isAutomationTester=true
}
console.log(employee.name);
console.log(employee.role);

In real time we frequently use objects to store test data.
const loginData={
username:"admin",
password:"admin123",
expectedStatusCode:200,
}

/* 
Object practice
Question 9 – Coding Practice
Create an object called employeeDetails with these properties:
1. employeeName = "Naasir"
2. experience = 12
3. designation = "Senior Engineering Lead - Quality"
4. isAutomationTester = true
Then:
- Print the employee name.
- Print the designation.
- Print the experience.
- Print the data type of isAutomationTester.
*/

const employeeDetails={
employeeName:"Naasir",
experience: 12,
designation: "Senior Engineering Lead - Quality",
isAutomationTester: true
}

console.log(employeeDetails.employeeName);
console.log(employeeDetails.designation);
console.log(employeeDetails.experience);
console.log(typeof employeeDetails.isAutomationTester);

//Arrays
/*
1. What is an Array?
An Array is a data structure used to store multiple values in a single variable.

Imagine you are testing an application in different browsers.

Instead of creating separate variables:
let browser1 = "Chrome";
let browser2 = "Firefox";
let browser3 = "Edge";

We can store everything in one Array:
const browsers=["Chrome", "Firefox", "Edge"];
console.log(browsers[0]); //Chrome
console.log(browsers[1]); //Firefox
console.log(typeof browsers); //Object
*/
//Functions
/*

1. What is a Function?
A function is a reusable block of code designed to perform a particular task.

For example, imagine you need to print a welcome message multiple times.

Without a function:

console.log("Welcome to JavaScript");
console.log("Welcome to JavaScript");
console.log("Welcome to JavaScript");

With a function:

function welcomeMessage(){
console.log("Welcome to Javascript");
}
welcomeMessage();
welcomeMessage();
*/
/*
Function with a return value
function addNumbers(){
return 10+20;
}

let result=addNumbers(); */

/*
Write a JavaScript program to:
1. Create an Array called testingTools.
2. Store "Playwright", "Postman", "JIRA", and "GitHub" in it.
3. Print the first element.
4. Print the third element.
5. Print the length of the Array.
6. Check whether testingTools is an Array using Array.isArray().
*/
const testingTools=["Playwright","Postman", "JIRA","GitHub"];
console.log(testingTools[0]);
console.log(testingTools[2]);
console.log(testingTools.length);
console.log(testingTools[Array.isArray]);



