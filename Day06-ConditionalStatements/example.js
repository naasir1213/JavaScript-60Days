//Conditional statements are used to execute different blocks of code based on whether a given condition is true or false.
/*
Real world example

Imagine we are entering an office
If we have an employee ID,we can enter
Otherwise, access is denied
*/
let employeeId=true;
if(employeeId){
    console.log("Access Granted")
}
console.log("===============")

//If Statement
//The if statement executes a block of code only when the given condition evaluates to true.
//Example-Check employee experience
/*
Conditional statements in JavaScript are used for decision-making. They allow us to execute different blocks of code based on whether a specified condition evaluates to true or false. Examples include if, if-else, else-if, and switch statements."*/



//Example-2 Condition is false
let experience=2;
if(experience>=5)
{
    console.log("Eligible for Senior Role");
}
else{
    console.log("Program Completed");
}

console.log("=================")

//Multiple statements inside if
let salary=60000;
if(salary>40000){
    console.log("Salary is above 40000");
    console.log("Eligible for Loan");
    console.log("Application  can proceed");
}
console.log("===============")

//What if we dont use curly braces?
// JavaScript allows an if statement without curly braces when there is only one statement.
let age=25;
if(age>=18)
    console.log("Eligible for vote");
console.log("===================")
/*
This is valid JavaScript.

However, using curly braces is recommended because it improves readability and prevents mistakes when adding more statements.
*/
let number=50
if(number>=100)
{
    console.log("Number is greater than 100")
}

console.log("===============")

//Lets understand how to execute an alternative block when the condition is false
/*
Syntax
if (condition) {
    // Executes when true
} else {
    // Executes when false
}
*/
let numberr=50;
if(numberr>=100){
    console.log("Number is greater than or equal to 100");
}
else{
    console.log("Number is less than 100")
}
console.log("===============")

//Check whether an employee is eligible for a senior position.
let experiencee=3;
if(experiencee>=5){
    console.log("Eligible for Senior Position");
}
else{
    console.log("Not Eligible for Senior Position");
}
console.log("================")

/*
we have an employee experience level:
- 0–2 years: Junior
- 3–5 years: Mid-Level
- 6–10 years: Senior
- Above 10 years: Lead
*/
let experienc=10;
if(experienc>=0 && experienc<=2)
{
    console.log("Junior")
}
else if(experienc>=3 && experienc<=5){
console.log("Mid-Level")
}
else if(experienc>=6 && experienc<=10){
    console.log("Senior")
}
else if(experienc>10){
    console.log("Lead")

}
else{
    console.log("Invalid")
}
console.log("=================")
/*
JavaScript uses short-circuit evaluation with &&. If the first condition is false, it does not evaluate the second condition.
*/

/*
How does an if inside another if work?
An employee can access a restricted application only when:
1. The employee is an active employee.
2. The employee has admin permission.
*/
let isActive=true;
let isAdmin=true;

if(isActive){
    console.log("Employee is active");
    if(isAdmin){
        console.log("Admin access granted")
    }
}
console.log("===============")
/*
What is a nested if statement in JavaScript?

"A nested if statement is an if statement placed inside another if statement. 
The outer if condition is evaluated first. If it evaluates to true, 
JavaScript enters the outer block and evaluates the inner if condition. 
If the outer condition is false, the inner if statement is skipped."
*/

let a = 10;
let b = 20;

if (a < 15) {

    console.log("Outer condition is true");

    if (b > 25) {
        console.log("Inner condition is true");
    }

    console.log("Outer block completed");
}

console.log("Program completed");
console.log("==================")

/*
Requirements
An employee can access an application only when:
1. isEmployee is true.
2. Inside the outer condition, check whether hasPermission is true.
3. If both conditions are true, print "Application Access Granted".
4. If the employee is active but has no permission, print "Access Denied - No Permission".
*/
let isEmployee=false;
let hasPermission=true;
if(isEmployee){
    if(hasPermission){
        console.log("Application Access Granted");
    }
    else{
        console.log("Access Denied - No Permission")
    }
}
else{
    console.log("Access Denied - Not an Employee")
}
console.log("================")

/*
Example 1 – Employee eligibility
An employee is eligible for a senior position when:
- Experience is greater than or equal to 5 years.
- Performance rating is greater than or equal to 4.
*/
let exprnce=8;
let rating=4;
if(exprnce>=5 && rating>=4){
    console.log("Eligible for Senior Position")
}
else{
    console.log("Not Eligible");
}
console.log("=============")
/*
"The logical AND operator (&&) is used to combine multiple conditions.
 It returns true only when all conditions are true. JavaScript also supports short-circuit evaluation,
 where it stops evaluating as soon as it encounters a falsy operand."
 */
let isUsernameCorrect = true;
let isPasswordCorrect = false;
if(isUsernameCorrect && isPasswordCorrect){
  console.log("Login Successful");
}
else{
console.log("Invalid Username or Password")
}
console.log("=============")

//Logical OR(||)
//The OR operator returns true when at least one condition is true.
/*
Example – Multiple login methods
Suppose a user can log in using either:
- Email authentication, OR
- Google authentication.
*/
let emaillogin=false;
let googlelogin=true;

if(emaillogin || googlelogin){
    console.log("Login Successful");
}
else{
    console.log("Login failed");
}

console.log("===============")
/*
What is the logical OR operator in JavaScript?

"The logical OR operator (||) combines multiple conditions and returns true when at least one operand is truthy.
 It uses short-circuit evaluation and stops evaluating when it encounters a truthy operand."
*/
let isEmailVerified = false;
let isPhoneVerified = true;

if(isEmailVerified || isPhoneVerified){
    console.log("Account Verified");
}
else{
    console.log("Account Verification Failed");
}
console.log("================")

/*
Logical Not Operator
1. What is the NOT operator?
The logical NOT operator reverses the Boolean value of a condition.
- true becomes false.
- false becomes true.
*/
//Example-Account Verification
let isVerified = false;

if (!isVerified) {
    console.log("Account is not verified");
} else {
    console.log("Account is verified");
}
console.log("==================")

//Another example
let isLoggedIn = true;

if (!isLoggedIn) {
    console.log("Please Login");
} else {
    console.log("Welcome Back");
}
console.log("===========")
/*
What is the logical NOT operator in JavaScript?

"The logical NOT operator (!) reverses the Boolean value of an expression.
 If the expression is true, it returns false, and if it is false, it returns true."
 */
let isActive1=false;
if(!isActive1){
    console.log("Employee is Inactive");
}
else{
    console.log("Employee is Active");
}
console.log("================")

//Dry Run
let a1 = true;
let b1 = false;
let c = true;

if (a1 && b1 || c) {
    console.log("Condition Passed");
} else {
    console.log("Condition Failed");
}
console.log("=============")

/*
What is the operator precedence between && and || in JavaScript?

Interview-ready answer: The logical AND (&&) operator has higher precedence than the logical OR (||) operator. 
Therefore, JavaScript evaluates && first unless parentheses change the order.
*/
let x = false;
let y = true;
let z = false;

if (x && y || !z && y) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

console.log("===============")

let exper = 7;
let isCertified = true;
let hasProjectExperience = false;

if (exper >= 5 && isCertified || hasProjectExperience) {
    console.log("Eligible for Senior QA");
} else {
    console.log("Not Eligible");
}
console.log("=============")
let agee = 25;
let hasLicense = false;
let hasExperience = true;

if (agee >= 18 && hasLicense && hasExperience) {
    console.log("Allowed to Drive");
} else {
    console.log("Not Allowed to Drive");
}

console.log("========================")

let isEmploye = true;
let isActiv = false;
let isAdmn = true;

if (isEmploye) {
    if (!isActiv) {
        console.log("Employee is Inactive");
    } else if (isAdmn) {
        console.log("Admin Access Granted");
    } else {
        console.log("Employee Access Granted");
    }
} else {
    console.log("Not an Employee");
}

console.log("=======================")
/*
When the first condition in an if-else if-else chain is true, JavaScript executes that block and skips the remaining alternatives.

Even though isAdmin = true, that condition is not evaluated because the first inner if already matched.
*/

let expere = 8;
let isCertfied = false;
let isProjectLead = true;
let isAtive = true;

if (isAtive && (expere >= 5 && isCertfied || isProjectLead)) {
    console.log("Senior QA Access Granted");
} else {
    console.log("Access Denied");
}
console.log("=====================")
/*
How does JavaScript evaluate multiple logical operators?

JavaScript follows operator precedence. Parentheses are evaluated first, followed by logical AND (&&) before logical OR (||). Short-circuit evaluation can prevent unnecessary operand evaluation.
*/
/*
"if-else if-else is used when we need to select one condition from multiple alternatives. 
Multiple independent if statements are used when multiple conditions can be true and their corresponding blocks should execute independently."
*/
let a2 = false;
let b2 = true;
let c2 = true;

if (a2 && b2 || c2 && !a2) {
    console.log("Condition A");
} else {
    console.log("Condition B");
}
console.log("=================")

isActive = false;
isAdmin = true;
isTeamLead = true;
if (isActive && (isAdmin || isTeamLead)) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}
console.log("===============")

let isEmployeeee = true;
let isActiveeee = true;
let isAdminnn = false;
let isManager = true;

if (isEmployeeee && isActiveeee) {
    console.log("Employee Verified");

    if (isAdminnn || isManager) {
        console.log("Privileged Access");
    } else {
        console.log("Standard Access");
    }
} else {
    console.log("Access Denied");
}

console.log("Process Completed");

console.log("=================")
let userInput = "10";

if (userInput == 10) {
    console.log("Condition 1 Passed");
}

if (userInput === 10) {
    console.log("Condition 2 Passed");
} else {
    console.log("Condition 2 Failed");
}

console.log("===============")

let username = "";
let password = "admin123";

if (username && password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

if (!username) {
    console.log("Username is Required");
}

console.log("=============")

let experienceee = 6;

let result = experienceee >= 5 ? "Senior QA" : "Junior QA";

console.log(result);
console.log("================")

/*
 condition ? expressionIfTrue : expressionIfFalse;
 ? separates the condition from the true expression.
: separates the true expression from the false expression.
*/
/*
Requirements
Employee must be active.
Employee must have at least 5 years of experience.
Employee must be certified OR be a project lead.
If all conditions are satisfied, print "Senior QA Access Granted".
Otherwise, print "Access Denied".
*/
let experienceeee = 7;
let isActiveeeee = true;
let isCertifiedddd = false;
let isProjectLeadddd = true;
if(isActiveeeee && experienceeee || isCertifiedddd || isProjectLeadddd){
    console.log("Senior QA Access Granted");
}
else{
    console.log("Access Denied");
}