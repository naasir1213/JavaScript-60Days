//Comments in javascript
//In JavaScript, comments are used to explain the code and make it more readable. There are two types of comments:
console.log("Hello, World!"); // This is a single-line comment
console.log("multi line comment");/* multi line comment*/
//Basic calculations
console.log(10+20);
console.log(50-20);

//Write a program that prints the following five lines:
console.log("My name is Naasir");
console.log("I am learning JavaScript");
console.log("My experience is in Software Testing");
console.log("My goal is Playwright Automation");
console.log("Day 1 completed");

//Create a JavaScript program that prints the following output:
console.log("Javascript");
console.log(100);
console.log(200);
console.log(300);
console.log("Learning Automation Testing");

//Most common errors in JavaScript
//1. Syntax errors: These occur when the code violates the rules of the JavaScript language. For example, forgetting to close a parenthesis or using an undefined variable.
//2. Reference errors: These occur when the code tries to access a variable or function that does not exist or is out of scope.
//3. Type errors: These occur when the code tries to perform an operation on a value of the wrong type, such as trying to call a method on a string that is not a string.
//4. Runtime errors: These occur when the code encounters an unexpected condition during execution, such as trying to divide by zero or accessing an array index that does not exist.

//1. SyntaxError – Missing closing parenthesis
//Incorrect code:
//console.log("Hello world";
//QA scenario: A syntax error can prevent your entire Playwright test file from loading.

/* 2. ReferenceError – Variable not defined
Incorrect code:
console.log(username);
Suppose you haven't declared username.

You may receive:
Suppose you haven't declared username.

You may receive: ReferenceError: username is not defined
Correct code:
let username = "Naasir";

console.log(username);
QA scenario: You accidentally use the wrong variable name while passing login test data. */

/* 3. TypeError – Calling a method on a non-function
Incorrect code:
let username="Naasir";
username();
Error:
TypeError: username is not a function


Why? Because username contains a string, not a function.

QA scenario: You mistakenly call a variable as a function in your automation framework. */
