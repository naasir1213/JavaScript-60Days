//1. Introduction to loops
//Imagine we have to print the following message five times
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
/*
We are writing the same statement five times.

Instead, JavaScript provides loops. A loop allows us to execute a block of code repeatedly based on a condition.
*/
//A loop is a programming control structure that executes a block of code repeatedly until a specified condition is false

//2.Types of loops in JavaScript
/*
For Loop:
Used when we know how many times we want to execute a block of code.
While Loop:
Used when the number of iterations is not known in advance.
do ..while Loop:
Executes the code at least once before checking the condition.
*/
//3.Example-For Loop
for(let i=1;i<=5;i++){
    console.log("For Loop");
}

//2.Different ways to use for loop
//Example 1:Print even numbers
for(let i=2;i<=20;i=i+2){
    console.log(i);
}

//Example2:Reverse Iteration
for(let i=10; i>=1; i=i-2){
console.log(i);
}

//Exampl-3-Calculate the sum
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
    console.log(sum);
}

//Problem 1: Print multiplication table
//Write a JavaScript program to print the multiplication table of 7.

for(let i=1;i<=10;i++){
  let result=7*i;
  console.log(`7 * ${i} = ${result}`);
    
}

//While Loop
//While loop executes a block of code repeatedly as long as the specified condition is true
/*
Real World example
Imagine we are trying to login into an application
.We have 3 login attempts
.After each unsuccessful attempt , the number of remaining attempts decreases.
.The process continues while attempts are available
Syntax
initialization;

while (condition) {
    // Code to execute

    increment/decrement;
}

*/
//While loop example
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//Print numbers from 1 to 10 using a While Loop
i=1;
while(i<=10){
    console.log(i);
    i++
}

//Do-While Loop- Executes the code block at least once,even if the condition is false
/*
Syntax
do
{
code to execute
}while(condition);

*/
//Example
let j=6;
do{
    console.log(j);
    j++;
}while(j<=5)
//OP:6 ,here condtion is false, so it will execute once

//Loop control statement-break and continue
//Break statement:The break statement immediately terminates the loop,even if the condtion is still true
//Example
for(let i=1;i<=10;i++){
    if(i==5){
        break;
        
    }
    console.log(i)
}

/*
Real world example
Imagine an application login process.

You have a list of users, and you want to find a particular user.

Once the matching user is found, there is no need to continue checking the remaining users.

You can use break to terminate the loop.
*/
//Continue Statement
//The continue statement skips the current iteration and moves to the next iteration of the loop.
for(let i=1;i<=5;i++){
    if(i==3){
        continue;

    }
    console.log(i);
}

//Print numbers 1 to 10,but skip 5
for(let i=1;i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

/*
Nested Loops
A nested loop means one loop inside another loop.

In simple terms:
- The outer loop controls the main iterations.
- The inner loop executes completely for every iteration of the outer loop.
Interview-ready definition:

A nested loop is a loop placed inside another loop. For every iteration of the outer loop, the inner loop executes all its iterations.
*/
//Example
for(let i=1;i<=3;i++){
  for(let j=1;j<=2;j++){
    console.log(`i=${i}, j=${j}`);
  }
}

//Nested loops are commonly used to print patterns
//Print 3 rows with 4 stars in each row

for(let i=1;i<=3;i++){
    let row="";
    for(let j=1;j<=4;j++){
        row=row+"*";
    }
    console.log(row);
}

/*
Outer loop controls the rows.
Inner loop controls the columns.
row += "* " adds one star at a time.
console.log(row) prints the completed row.
*/

/*
Print the following pattern using nested loops
Expected Output
*
* *
* * *
* * * *
* * * * *
*/

for(let i=1;i<=5;i++){
    let row="";
   for(let j=1;j<=i;j++){
    row+= "*";
    
   }
   console.log(row);
}

/*
Print this pattern:

1
12
123
1234
12345
*/

for(let i=1;i<=5;i++){
   let row="";
   for(let j=1;j<=i;j++){
    row+=j;
   }
   console.log(row);
 
}


for(let i=5;i>=1;i--){
    let row="";

    for(let j=5;j<=i;j++){
        row+="*";
    }

    console.log(row);
}


for(let i=1;i<=5;i++){
   let row="";
   for(let j=1;j<=i;j++){
    row+=i;
   }
   console.log(row);
 
}


let total = 0;

for (let i = 1; i <= 5; i++) {
    if (i === 4) {
        break;
    }

    total = total + i;
}

console.log(total);
