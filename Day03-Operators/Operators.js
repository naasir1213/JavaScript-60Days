/* Operators:An operator is a symbol or keyword

Arithmetic operators perform mathematical calculations.
Operator	Name	Example	Output
+	Addition	10 + 5	15
-	Subtraction	10 - 5	5
*	Multiplication	10 * 5	50
/	Division	10 / 5	2
%	Modulus	10 % 3	1
**	Exponentiation	2 ** 3	8
*/
//Basic Calculations
let a=20;
let b=10;
console.log(a+b);//30
console.log(a - b); // 10
console.log(a * b); // 200
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** 2); // 400

//Example-2-Modulus(%)
//Returns the remainder
console.log(10%3); //1

//Real world example-Even or odd number
let number =7;
if(number%2==0){
    console.log("Even Number");
}
else{
    console.log("Odd");
}

//JavaScript's + operator can perform both addition and string concatenation.
console.log(10+20); //30 
console.log("10"+20); //1020

/*Assignment Operators
Assignment operators assign values to variables or update their existing values.
Operator	Example	Equivalent expression
=	x = 10	Assign 10
+=	x += 5	x = x + 5
-=	x -= 5	x = x - 5
*=	x *= 5	x = x * 5
/=	x /= 5	x = x / 5
%=	x %= 3	x = x % 3  */

let total=100
total+=50;
console.log(total);
total-=30
console.log(total);
total*=2
console.log(total);
/*Comparison Operators
Comparison operators compare two values and return a Boolean result: true or false.
Operator	Meaning	Example	Result
>	Greater than	10 > 5	true
<	Less than	10 < 5	false
>=	Greater than or equal	10 >= 10	true
<=	Less than or equal	5 <= 10	true
==	Loose equality	10 == "10"	true
===	Strict equality	10 === "10"	false
!=	Loose inequality	10 != "20"	true
!==	Strict inequality	10 !== "10"	true */

//Difference between == and ===
//== is loose equality, it will check only the value
console.log(10 == "10"); //true
//====It will check both value and datatype
console.log(10 == "10"); //false

/*
Logical Operators
Logical operators combine multiple conditions.

There are three important logical operators.

| Operator | Name | Meaning |
|---|---|---|
| && | AND | All conditions must be true |
| || | OR | At least one condition must be true |
| ! | NOT | Reverses the Boolean value | */

//AND
let username="admin";
let password="admin123";

if(username==="admin" && password==="admin123"){

console.log("Login Successful");
}
else{
    console.log("Login Failed");
}

// ||
let isAdmin=false;
let isManager=true;
if(isAdmin||isManager){
    console.log("Access granted");
}

//Real world scenario
//Consider a user who can access a dashboard only when logged in and their account is active
let isLoggedIn=true;
let isActive=true;
if(isLoggedIn && isActive){
    console.log("Dashboard Accessible");
}
else{
    console.log("Access denied");
}

/*
Increment and Decrement Operators
These operators increase or decrease a variable's value by one.
Operator	Meaning
++	Increment by 1
--	Decrement by 1
*/
//Post Increment(x++)
let x=10;
console.log(x++); //10
console.log(x);//11
//Pre Increment(++x)
let x1=10;
console.log(++x);//11
console.log(x);//11

//Ternary Operator
//Writing a simple if else condition
//Syntax: condition ? expressionIfTrue : epxressionIfFalse;

//Example-1:age>=18. elgible for vote.otherwise not elgible
let age=25
let result= age>=18 ? "You are elgible for vote": "Not elgible";
console.log(result);
//QA Example-Check responsestatus
let responseStatus=200;
let testResult= responseStatus===200 ? "Pass": "Failed";
console.log(testResult);

//Truthy and Falsy values
/*
This is an important JavaScript concept for debugging and automation.

JavaScript evaluates values as either truthy or falsy when used in Boolean contexts.
Falsy values
There are exactly seven commonly recognized falsy values:
Value	Boolean conversion
false	false
0	false
-0	false
0n	false
""	false
null	false
undefined	false
NaN	false   */
/*
Very important interview question:

Why are empty arrays and empty objects truthy?

Because in JavaScript, all objects are truthy, including empty arrays and empty objects.*/

//Short circuit evaluation
/*JavaScript sometimes stops evaluating an expression once the result is already determined.
AND (&&)
If the first condition is falsy, JavaScript does not evaluate the second operand.*/
let result1 =false && console.log("Hello");
console.log(result1);

//OR (||)
//If the first operand is truthy, JavaScript skips the second operand.
let result2 = true || console.log("Hello");

console.log(result2);

//13.Operator Precedence
//Operator precedence determines which operation JavaScript performs first.
let result3=10+5 *2; //20
console.log(result3);
//Multiplicaiton has higher precedence
//Use parantheses 
let result4=(10+5)*2
console.log(result4) //30

//Real time QA Automation Scenario
//Scenario1-API Status Validation
let acutalStatus=200;
let expectedStatus=200;
if(acutalStatus===expectedStatus){
    console.log("API Test Passed");
}
else{
    console.log("API Test Failed");
}

//Scenario2-Login Validation
let username1="admin";
let password1="admin123";
let isLoggedIn1=true;

if(username1==="admin" && password1==="admin123"&& isLoggedIn1)
    {

    console.log("Login successful");

}
else{
    console.log("Login failed");
}

//Scenario3-Retry counter
let retryCount=0;

retryCount++;
retryCount++;
retryCount++;
console.log(retryCount) //3

//Scenario4-Optional API response fields
let response={
    data:{
        user:{
            name:"Naasir"
        }
    }
};
console.log(response.dat?.user?.name)

//Nullish coalescing operator(??)
//Provides a fallback only when the left hand value is null or undefined
let person=null;
let resul= person ?? "Mohammad";
console.log(resul);

//Compare:
console.log(0||100); //
console.log(0??1000); //

//Optional Chaining
//Safely access the nested properties without throwing an error when an intermediate value is null or undefined
let employee={
    name:"Zohaan",
    address:{
        city:"Newzeland"
    }
};
console.log(employee.address?.city);
console.log(employee.address?.age);
console.log(employee.address?.gender);

/*
Coding Interview Questions
These are the questions I want you to understand and practice.

| Level | Coding question | Concepts |
|---|---|---|
| Beginner | Check whether a number is even or odd | %, if |
| Beginner | Find the largest of two numbers | Comparison |
| Intermediate | Check whether a user can log in | &&, || |
| Intermediate | Find whether a number is divisible by 5 and 3 | %, && |
| Advanced | Predict output involving pre/post increment | ++, precedence |
| Advanced | Implement a fallback value for API response fields | ??, ?. | */

//Check whether a number is even or odd 
let num=10;
if(num%2===0){
    console.log("Even")
    
}
else{
    console.log("Odd");
}

//Find whether the number is divisible by 5 and 3
let numb=15;
if(numb%5===0 && numb%3===0){
    console.log("Number is divisible")
}
else{
    console.log("Not divisible")
}

//Find the largest of two numbers

let num1=100;
let num2=2000;

if(num1>num2){
    console.log("num1 is largest")
}
else if(num2>num1){
    console.log("num2 is largest");
}
else{
    console.log("Both numbers are equal")
}

//Check whether a user can log in

let Username="naasir";
let Password="Mohammad";
let isLoggedInn=false;

if(Username==="naasir" && Password==="Mohammad" && isLoggedInn===true){
    console.log("Login Successful");
}
else{
    console.log("Invalid login")
}

//Implement a fallback value for API response fields
let apiResponse={
    data:{
        user:{
            name:"Zohaan",
            address:null
        }
    }
};
console.log(apiResponse.data?.user?.name);
console.log(apiResponse.data?.user?.age);
console.log(apiResponse.data?.user?.address);
//nullish coalescing operator(??)
//Provides a fallback only when the left hand value is null or undefined
let person11=null;
let resultt= person11 ?? "Mohammad";
console.log(resultt);

//Example of optional chaining and nullish coalescing
let apiResponsee = {
    data: {
        user: {
            name: "Zohaan",
            address: null
        }
    }
};

let userName = apiResponsee.data?.user?.name ?? "Guest";

let userAge = apiResponsee.data?.user?.age ?? 0;

let userAddress = apiResponsee.data?.user?.address ?? "Address not available";

console.log(userName);  //Zohaan
console.log(userAge); //0
console.log(userAddress);//Address not available

//Check whether 45 is divisible by both 5 and 3. Print the appropriate message.

let numm=45;
if(numm%5===0 && numm%3===0){
    console.log("Both numbers are divisible")
}
else{
    console.log("Not divisible")
}

//Find the largest among 150 and 250. Also handle the case when both numbers are equal.
let numbbers1=250;
let numbber=150;

if(numbberss>numbber){
    console.log("numbberss is largest")
}
else if(numbbers1===numbber){
    console.log("Both numbers are equal");
}
else{
    console.log("Numbers are not matching");
}

//Given an API response where user.name is an empty string, use ?? 
// to provide the fallback value Guest.

let apiResponseee = {
    data: {
        user: { 
            name: ""
        }
    }
};  

console.log(apiResponseee.data?.user?.name ?? "Guest"); // Output: "" (empty string, not null or undefined)

//Problem: Find the largest among three numbers.
let a1 = 20;
let b1 = 20;
let c1 = 15;
if(a1>=b1 && a1>=c1){
    console.log("a1 is largest")
}
else if(b1>=a1 && b1>=c1){
    console.log(`Largest number is: ${b1}`);
}
else{
    console.log("c1 is largest");
}

//Objective: Write a JavaScript program to calculate a student's grade based on marks.

let marks=100;
if(marks>100 || marks<0){
    console.log("Invalid marks");
}
else if(marks>=90 && marks<=100){
    console.log("Grade A");
}
else if(marks>=80 && marks<=89){
    console.log("Grade B");
}
else if(marks>=70 && marks<=79){
    console.log("Grade C");
}
else if(marks>=60 && marks<=69){
    console.log("Grade D");
}
else{

    console.log("Fail");
}

/*
const response = {
    status: 200,
    data: {
        employee: {
            id: 101,
            name: "Naasir",
            active: true,
            salary: "50000",
            department: null
        }
    }
};
*/

// Step 1: Safely access employee details
const employeee= response.data?.employee?.id;
// Step 2: Convert salary into a number
const salary=Number(response.data?.employee?.salary);
// Step 3: Provide a default department
//const employee=response.data?.employee?.department?? "Unassigned";

//Step 4-Validate all conditions
// const isvalidEmployee= 
//         response.status===200 &&
//         employeee!==null &&
//         employeee?.active===true &&
//        salary=Number(salary)>0 
//        if(isvalidEmployee){
//         console.log("Employee Validation Passed");
//        }
//        else{
//         console.log("Employee Validation Failed");
//        }