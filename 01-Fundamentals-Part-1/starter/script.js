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




const age = 15;

const isOldEnough = age >= 18

if (isOldEnough)
{//if true, will output

    console.log('Sarah can start driver license ????')

}

if (age >= 18) {//if true, will output

    console.log('Sarah can start driver license ????')

}
else {

    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. She must wait ${yearsLeft} more years`)

}

//If else control structure
/*

if(){

}else {


}



const birthYear = 2012;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


//------------------------------------------------------
//Type Conversion and Coercion

//Conversion- maunally convert
//Coercion- automatically convert behinds the scenes

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));//NaN - Not a Number (invalid numebr)

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old.');// plus operator between numbers and string are converted to strings

console.log('23' - '10' - 3);// this minus operator converts to numbers to correctly do the computation

console.log('23' * '2');//multiplication operator also converts to numbers to correctly do the computation

let n = '1' + 1;// '11' converted to string
n = n - 1;// 10 converted to number 11-1 = 10
console.log(n);


//------------------------------------------------------
//Truthy and Falsy Values
//5 Falsy values: 0, '', undefined, null, NaN - converted to false when converted to boolean
//Anything else are true values when converted to boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(NaN));

//In pratice we dont use Boolean()
//So conversion on Boolean is implicit not explicit, it does coercion behind the scenes

const money = 110;
if (money) {//Javascript converts to boolean and 0 is a falsy value so it returns false
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height;
//let height = 0; this will also return false, since 0 is also a falsy value
if (height) {//heigth it undefined, so undefined takes place of heigh and since its a falsy value, it returns false

    console.log('YAY! Height is defined');
} else {

    console.log('Height is UNDEFINED');
}


//------------------------------------------------------
//Equality Operators: == vs ===

const age = '18';

if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');
//=== returns true or false boolean value
//=== strict equality operator
//does not type coercion
// 18 === 18
// true
// 18 === 20
// false

//== returns true or false boolean value
//== loose equality operator
//does type coercion (converts '18' to number)
//'18' == 18
// true
//'18' == 20
// false

//avoid using == loose equality operator as much as possible

//prompt() asks user for an input
const favoriteNum = Number(prompt("Whats your favorite number?"));//convert prompt to number

console.log(favoriteNum);
console.log(typeof favoriteNum);

if (favoriteNum === 23) {//need to convert favoriteNum to number
    console.log('Cool 23 is ab amazing number');
} else if (favoriteNum === 7) {
    console.log('7 is also a cool number');
}
else if (favoriteNum === 9) {
    console.log('9 is also a cool number');
} else {

    console.log('Number is not 23 or 7 or 9');
}

//different/not operator !==

if (favoriteNum !== 23) console.log('Why not 23?');



//------------------------------------------------------
//Boolean Logic

//AND, OR, NOT operators
//Truth Tables
//Combining operators



//------------------------------------------------------
//Logical operators

const hasDriversLicense = true; // A
const hasGoodVision = true //B

console.log(hasDriversLicense && hasGoodVision); // true AND true is TRUE

console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

//const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {

//     console.log('Sarah is able to drive!');
// } else {

//     console.log('Someone else should drive');
// }

const isTired = false;// C

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {

    console.log('Sarah is able to drive!');
} else {

    console.log('Someone else should drive');
}

*/