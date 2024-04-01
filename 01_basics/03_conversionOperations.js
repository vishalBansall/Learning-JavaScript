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

//console.log(booleanIsLoggedIn);

// 1 --> true
// 0 -->false
// "" --> false (empty string)
// "vishal" --> true

// conversion to string;

let someNumber = 33
let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

// tricky conversions:-

//console.log(true); --> o/p --> true;
//console.log(+true); --> o/p --> 1;

// console.log(true+); --> o/p --> error;

// console.log(+""); --> o/p --> 0;

// console.log("1" + 2 + 2);
//O/P --> 122 because JS will take the whole as string if first variable is string value.

// console.log(1+2+"4"); --> o/p --> 34;
// because at first JS will treat it as number variables and then will write the string value with it.


let num1,num2,num3;

//num1 = num2 = num3 = 2+2; --> not a good practice.

let gameCounter = 100;
// gameCounter++
// ++gameCounter --> o/p --> same 101;

// console.log(gameCounter);
//o/p --> 101;

