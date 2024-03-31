let score = 33;

// console.log(typeof score);

let newScore = "33"
// console.log(typeof newScore);

// conversion of string to number

let scoreInNumber = Number(newScore);
// "Number" keyword will change any value to no. only.
//console.log(typeof scoreInNumber);

// "33" --> 33 (type ==> no.)
// "33abc" --> NaN (but its type will be no. only (confusing JS));
// "true" --> 1 (type --> no.)
// "false" --> 0 (type --> no.)
// "null" --> 0 (type --> no.)
// "undefined" --> NaN (type --> no.)


// conversion to boolean

//let isLoggedIn = 1;

let isLoggedIn = "h";
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 --> true
// 0 -->false
// "" --> false (empty string)
// "vishal" --> true

// conversion to string;

let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);
