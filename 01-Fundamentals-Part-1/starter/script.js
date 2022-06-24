/*

let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
//can use $ or _ to overwrite and use reserved variable names
let $function = 27;
console.log(jonas_matilda);
console.log($function);

let person = "Jonas";

//All Uppercase variables for constants
let PI = 3.1415;

//descriptive variables - USE THESE!
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

//undescriptive variables
let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

//let declares new variables

//dynamic typing:
//redefine variable javaScriptIsFun to string
javaScriptIsFun = "YES!";

//undfine datatype
let year;
console.log(year);
console.log(typeof year);

//bug in javascript. Says that null is an object instead of null datatype
console.log(typeof null);



//reassign or mutate the variable
let age = 30;
age = 31;


//constant variables cannot be changed
const birthYear = 1992;
//birthYear = 1991;

//const job;//gives error

//Good pratice to have very little mutations or reassignments

//var is old way to declare variables
//avoid using var
var job = "programmer";
job = "teacher";

//let is block scoped
//var is function scoped

//possible to declare without using let/const
//BAD IDEA! as it creates it in global scope instead of the current scope its declared at
lastName = "Schmedtmann";
console.log(lastName);



// OPERATORS
const NOW = 2037;
const ageJonas = NOW - 1991;
const ageSarah = NOW - 2018;
console.log(ageJonas, ageSarah);

// 2 ** 3 <- means 2 to the power of 3 (2^3)
//commas separate operations
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";

//concatanate strings with + operator
console.log(firstName + ' ' + lastName);

// = assigment operator
let x = 10 + 5;//result: 15
x += 10; // x = x + 10; result: 25
x *= 4;// x = x * 4; result: 100
x++; //x = x + 1; result 101
x--; //x = x - 1; 
x--; // result 99
console.log(x);

//Comparison operators
// <, >, >=, <=

console.log(ageJonas > ageSarah);//retunrs true if correct
console.log(ageSarah >= 18);//returns true if correct

//can store results
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const NOW = 2037;
const ageJonas = NOW - 1991;
const ageSarah = NOW - 2018;

console.log(NOW - 1991 > NOW - 2018);

//Javascript operator precedence

//mathermatical operators have higher precedence than comparison operators

//some have precedence left-to-right or right-to-left

//console.log(25 - 10 -5);

let x, y;
x = y = 25 - 10 - 5;//minus operators compute first so answer is 10 (compute from left-to-right). Then assign operators compute after, but from right-to-left. So y becomes 10 first, then x becomes 10 second
console.log(x, y);

//using parenthesis operators as it has highest precedence to correctly calculate averageAge called 'grouping'
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(jonas);

//Template literals - assembles multiple pieces into one final string
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with\n\
multiple \n\
lines');

console.log(`String
with
mutiple
lines with
backticks key (tilde key)
`);

*/


const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {



}