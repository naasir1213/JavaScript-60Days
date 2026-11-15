/*Scopes in Javascript
There are three types of scopes in javascript
1. Global Scope
2. Function Scope
3. Block Scope  */

//Example of Variable Scope
var employeeName = "Naasir"; //Global Scope
if(true){
    var employeeName = "Mohammad"; //Function Scope
}
console.log(employeeName); //Mohammad

//Example of let
let employeeName = "Naasir"; //Global Scope
if(true){
    let employeeName = "Zohaan";  //Block Scope
}
console.log(employeeName); //Naasir
   
//const example
const employeeName = "Nouman"; //Global Scope
if(true){
    const employeeName = "Zaid";  //Block Scope
}
console.log(employeeName); //Nouman