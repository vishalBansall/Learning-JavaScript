// Primitive
// 7 types:- --> these are always call by value
// 7 types are:- string,number,boolean,null,undefined,symbol,bigInt

// Non-Primitives / Reference types
// --> these are call by reference
// types are:- Array,objects,functions

//*** JS is dynamically typed language because we do not define the type of data we store in a variable.....it is checked on the runtime itself.

// number datatype:-

const num = 3;
const newValue = 3.5;

// boolean datatype:-

const isLoggedIn = true;

// null datatype:-

const outsideTemp = null;

//undefined datatype:-

let userMail; //--> 1st way
let email = undefined; // --> 2nd way.

// symbol datatype:-
const id = Symbol('123'); //123 is a string value
const anotherId = Symbol('123'); // same value as first variable

//console.log(id == anotherId);
// even if the value in both the symbol variables are same...but JS will not consider there type or value as same....this is the usage of symbol datatype...it gives the unique variable in the output.

// bigInt datatypes:-

const bigNumber = 324472842875428744242394n
// now its bigInt after using n at last.


//************Non premetive datatypes*********

// Arrays, objects, functions

const heros = ["spiderMan" , "batman" , "captainAmerica"];

//Objects:-
let myObj = {
    name: "Vishal",
    age: 22,
}

// Functions:-

let myFunc = function(){
    console.log("Hello World");
}

// Check for the datatype of any variable;

console.log(typeof bigNumber);
// Typeof bigInt is --> bigInt
console.log(typeof myFunc);
// typeof function is --> function
console.log(typeof myObj);
// typeof object is --> object
console.log(typeof heros);
// typeof array is --> object
console.log(typeof outsideTemp);
// typeof null is --> object