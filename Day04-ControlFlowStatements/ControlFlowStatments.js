//IF Statement
//If statement executes a block of code if a specified condition is true.
// if (condition) {
//     // Code executes if condition is true
// }

//Example
let age=25
if(age>=18){
    console.log("Elgible to vote");
}

/* IF-ELSE Statement
Syntax:
if (condition) {
    // Executes when true
} else {
    // Executes when false
}
    */
   //Example:Employee Elgibility
   let experience=3
   if(experience>=5){
    console.log("Elgible for promotion");
   }
   else{
    console.log("Not Elgible for promotion");
   }

   //IF-ELSE IF-ELSE Ladder
  /* Now let's move to an important concept.

What happens when we have more than two conditions?

For example, consider an employee performance rating:
Rating	Performance
5	Excellent
4	Very Good
3	Good
2	Average
1	Poor

We can handle these conditions using an if-else if-else ladder.
  */

 /* Syntax:

 if (condition1) {
    // Block 1
} else if (condition2) {
    // Block 2
} else if (condition3) {
    // Block 3
} else {
    // Default block
}
*/

let rating=4;
if(rating===5){
     console.log("Excellent");
} else if (rating === 4) {
    console.log("Very Good");
} else if (rating === 3) {
    console.log("Good");
} else if (rating === 2) {
    console.log("Average");
} else if (rating === 1) {
    console.log("Poor");
} else {
    console.log("Invalid rating");
}

/* Difference between Multiple if and if-else if 
Multiple If:Each condition is evaluted independently
if-else-if:Only the first matching block executes.*/

//Program a: Multiple if Statements
let score=80;
if(score>=50);
{
    console.log("Pass")
}
if(score>=70){
    console.log("Good");
}
if(score>=80){
    console.log("Excellent")
}

//QA Real world scenario
//Imagine we are testing an employee management application,The API returns
const response={
    status:200,
    data:{
        employee:{
            id:101,
            isActive:true
        }
    }
}

if(response.status===200){
    console.log("API request successful");
}
else{
    console.log("API Request Failed");
}

//Below we need to check the employee status:isACtive
if(response.data.employee.isActive===true){
    console.log("Employee is Active");
}
else{
    console.log("Employee is Inactive");
}

/*
Write a JavaScript program using if-else if-else to determine the student's grade.

Conditions:
Marks	Grade
90–100	A
75–89	B
60–74	C
40–59	D
Below 40	Fail
Below 0 or above 100	Invalid marks

Input:
let marks = 85;


Expected output:
Grade B
*/
let marks=0;
if(marks<0 || marks>100){
    console.log("Invalid marks");
}
else if(marks>=90 && marks<=100){
    console.log("Grade A");
}
else if(marks>=75 && marks<=89){
    console.log("Grade B");
}
else if(marks>=60 && marks<=74){
    console.log("Grade C");
}
else if(marks>=40 && marks<=59){
    console.log("Grade D");
}

else{
    console.log("Fail");
}

//Nested IF Statement
//A nested if statement is an if statement inside another if statement.
/*
A nested if statement means placing one if statement inside another if statement.

In simple words:

We first check one condition. If that condition is true, we check another condition inside it.
Real-world example
Imagine an employee promotion eligibility process.
- First, check whether the employee has at least 5 years of experience.
- If yes, check whether the performance rating is at least 4.
- If both conditions are satisfied, the employee is eligible for promotion.
if (condition1) {

    // Outer if block

    if (condition2) {

        // Inner if block

    }
}
    Remember:
- Outer if executes first.
- Inner if is evaluated only when the outer condition is true.
*/
//Example: Employee Promotion Eligibility
let experiencee=6
let ratingg=4

if(experiencee>=5){
    console.log("Experience requirement satisfied");
}
   if(ratingg>=4){
    console.log("Elgible for Promotion");
   }

//Example-2 If outer condition is false
let exprence=3;
let ratng=5;

if (exprence>= 5) {

    console.log("Experience requirement satisfied");

    if (ratng >= 4) {
        console.log("Eligible for promotion");
    }
}

/*Important concept

When the outer condition is false, JavaScript never enters the outer block. 
Therefore, the inner condition is not evaluated.*/

//Example-3:Outer condition true, inner condition false

let experienceee = 6;
let ratingggg = 3;

if (experienceee >= 5) {

    console.log("Experienceeee requirement satisfied");

    if (ratingggg >= 4) {
        console.log("Eligible for promotion");
    }
}

/*
Outer false → Inner condition is not evaluated.



Outer true, inner false → Outer block executes, inner block is skipped.
*/
/*
Problem: User Login Validation

You are developing a login validation program.

Consider the following requirements:
1. Check whether the username is correct.
2. If the username is correct, check whether the password is correct.
3. If both are correct, print "Login successful".
4. If the username is correct but password is incorrect, print "Invalid password".
5. If the username is incorrect, print "Invalid username".
Input:
let username = "admin";
let password = "admin123";


Expected output:
Login successful
*/

let username="admin";
let password="admin123";

if(username==="admin"){
    if(password==="admin12"){
        console.log("Login Successful");
    }
    else{
        console.log("Invalid Password");
    } 
}
    else{
        console.log("Invalid Username");
   
}

//Switch Statement
//Instead of writing multiple if-else if conditions,
//  we can use switch when we want to compare one expression against multiple specific values.
/*
Real-world example
Imagine an application that receives different API status codes:
Status code	Meaning
200	Success
201	Created
400	Bad Request
401	Unauthorized
404	Not Found
500	Internal Server Error

We can use a switch statement to identify the appropriate response message.

Switch(expression) {
    case  value1:
        // Code executes when expression matches value1
        break;
    case value2:
        // Code executes when expression matches value2
        break;
    default:
        // Code executes when expression doesn't match any case
} */
let day=2;
switch(day){
    case 1:
        console.log("Monday");
        break;
     case 2:
        console.log("Tuesday");
        break;   
     case 3:
        console.log("Wednesday");
        break;
      default:
        console.log("Invalid Day");
}

//What happens if we dont use break?
let dayy = 2;

switch (dayy) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");

    default:
        console.log("Invalid day");
}

//What is the default keyword?
//The default block executes when none of the cases matches the switch expression.
let dayyy=8;
switch(dayyy){
    case 1:
        console.log("Monday");
        break;
          case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
//Remember: default is optional, and it does not have to be the last case syntactically. However, placing it at the end is the usual convention.

//6.Switch Uses Stricit Equality
//Example
let status="200";
switch(status){
    case 200:
        console.log("Successs");
        break;
    default:
        console.log("Invalid status") //OP:Invalid status
}
/*
Why?

Because switch compares values using strict equality (===).
- "200" is a string.
- 200 is a number.
- Their data types are different.
Therefore, they don't match.

If you change case 200 to case "200", the output will be Success.
*/

//7.Multiple cases with the same output
//Sometimes multiple values should produce the same result.
//We can group cases together.
let dey=6;
switch(dey){
     case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Working day");
        break;

    case 6:
    case 7:
        console.log("Weekend");
        break;

    default:
        console.log("Invalid day");
}

//8.Real world QA Scenario
//Lets implement an API Status handler
let statuscode=404;

switch(statuscode){
    case 200:
        console.log("Success");
        break;
     case 201:
        console.log("Resource created");
        break;
      case 400:
        console.log("Bad request");
        break;
       case 401:
        console.log("Unauthorized");
        break;
         case 403:
        console.log("Forbidden");
        break;
        case 404:
        console.log("Resource not found");
        break;

    case 500:
        console.log("Internal server error");
        break;

    default:
        console.log("Unknown status code");
}

//Ternary Operator
//The ternary operator is a shorthand way of writing an if-else statement.
//It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
//Syntax:
//condition ? expressionIfTrue : expressionIfFalse
let ager=20;
let result= ager>=18 ? "Elgible to vote" : "Not elgible to vote";
console.log(result);

//Example-2-Employee Elgibility
let exprencie=3;
let statuss= exprencie>=5 ? "Elgible for Promtion" : "Not Elgible for Promtion";
console.log(statuss);

//Nested Ternary Operator
//One Ternary expression inside another 
let mark=85;
 grad= mark>=90 ? "Grade A":
 grad= mark>=75 ? "Grade B":
 grad= mark>=60 ? "Grade C":
 grad= mark>=40 ? "Grade D": "Fail"
 console.log(grad);

 //Real time QA Scenario
 //Imagine an API returns the status code
 let respnse={
    statuss:"200"
 };
 let message= respnse.statuss===200 ? "API Passed" : "API Failed";
 console.log(message);

 //Employee Bonus Elgibility
 let exprnce=7;
 let bonusResult= exprnce>=5 ? "Eligible for Bonus" : "Not Eligible for Bonus";
 console.log(bonusResult);

 //Employee Performance Classification
 //Requirement
 /*
 Score	Output
90–100	Excellent
75–89	Very Good
60–74	Good
40–59	Average
Below 40	Poor
Below 0 or above 100	Invalid Score
*/
 let score1=85;

 let resultt = score1 < 0 || score1 > 100 ? "Invalid score" :
               score1 >= 90 ? "Excellent" :
               score1 >= 75 ? "Very Good" :
               score1 >= 60 ? "Good" :
               score1 >=40 ? "Average":
               "poor";
console.log(resultt);   

/*
Problem: Number Classification

You are given a number.
let number = 15;


Write a program using if-else if-else to identify:
1. Positive number.
2. Negative number.
3. Zero.
4. Additionally, identify whether a positive or negative number is even or odd.
Expected output:
Positive Number
Odd Number


Requirements:
- Use if-else.
- Use the modulus operator %.
- Do not use ternary operators.
- Print the classification separately from even/odd.
*/
let number=-1;

if(number>0){
    console.log("Positive Number");
 }
 else if(number<0){
    console.log("Negative Number");
 }
 else{
    console.log("Zero")

 }
if(number%2===0){
 console.log("number is even")
    } 
else{
    console.log("number is odd")
}

/*
Intermediate
You are given the following employee details:
let experience = 6;
let performanceRating = 4;
let salary = 50000;


Business requirements:
1. Experience must be at least 5 years.
2. Performance rating must be at least 4.
3. Salary must be below 100000.
Expected output:
Eligible for Bonus


Conditions:
- Use nested if-else.
- Check experience first.
- Check performance rating inside the outer condition.
- Check salary inside the performance condition.
- Print an appropriate rejection message when a condition fails.
*/
let experiene = 6;
let performanceRating = 3;
let salary = 50000;

if(experiene>=5){
 if(performanceRating>=4){
 if(salary<100000){
  console.log("Elgible for Bonus")

 }
 else{
    console.log(`Salary is greater than: ${salary}`);
 }

 } else{
    console.log(`Performance is less than: ${performanceRating}`);
 } 
}else{
    console.log(`Experience is less than: ${experiene}`);
 }
 
    
 /*
 Validate an API response
Imagine an API returns the following response:
let response = {
    statusCode: 200,
    user: {
        name: "Naasir",
        isActive: true,
        isVerified: true,
        role: "admin"
    }
};


Requirements
Step 1 – Validate API status using if-else
- If statusCode === 200, proceed with user validation.
- Otherwise, print "API Request Failed".
Step 2 – Validate user using nested if-else

Only if the API status is 200:
- Check whether isActive === true.
- If active, check whether isVerified === true.
- If both are true, proceed.
- Otherwise, print an appropriate message:
  - "User Account Inactive"
  - "User Verification Failed"
Step 3 – Validate user role using switch

If the user is active and verified:
- admin → "Full Access"
- manager → "Manager Access"
- viewer → "Read Only Access"
- Default → "Unknown Role"
Step 4 – Generate a final message using the ternary operator

Use a ternary operator to assign:
- "Access Granted" if the user is active and verified.
- "Access Denied" otherwise.
*/

let responsee = {
    statusCode: 200,
    user: {
        name: "Naasir",
        isActive: true,
        isVerified: true,
        role: "admin"
    }
};
if(responsee.statusCode===200){
    console.log("Proceed with user validation")
}
else{
    console.log("API Request Failed");
}

if(responsee.statusCode===200){
    if(responsee.user.isActive===true){
        if(responsee.user.isVerified===true)
        {
            console.log("Proceed for Login");
        }
 else{
    console.log("User is not Verified");
 }
}else{
    console.log("User is in Active");

}
}else{  
    console.log("API Request Failed");
}


switch(responsee.user.role){
    case "admin":
        console.log("Full access for Admin");
        break;
    case "manager":
        console.log("Manager Access");
        break;
    case "viewer":
        console.log("Read Only Access");
        break;
    default:
        console.log("Unknown Role");
}

let accessmessage=responsee.statusCode===200 && responsee.user.isActive===true && responsee.user.isVerified===true ? "Access Granted" : "Access Denied";
console.log(accessmessage);