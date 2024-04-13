//************Arrays Part 2*******************

let arr = new Array(1,2,3,4,5);
let arr2 = new Array("Vishal", "Bansal" )

// arr.push(arr2)
// console.log(arr);
// O/P --> [ 1, 2, 3, 4, 5, [ 'Vishal', 'Bansal' ] ]

// If we push this way then the another array itself gets passed inside the existing array.
// But if we just want to pass the value of second array in the existing array...then we use concatination....[i.e. concat() function]-->

let concatedArr = arr.concat(arr2);
//console.log(concatedArr);
//O/P --> [ 1, 2, 3, 4, 5, 'Vishal', 'Bansal' ]

//i.e. in Concatination only the value of second array gets passed in the first array.

// --> Spread operator -->
// The the multiple arrays get spread in single array.

//For Eg:-
let marvel_heroes = new Array("captainAmerica", "spiderMan" , "thor", "ironMan")
let dc_heroes = new Array("batman" , "superman" , "flash");

let all_heroes = [...marvel_heroes, ...dc_heroes];
//console.log(all_heroes);

//O/P --> ['captainAmerica','spiderMan','thor','ironMan','batman','superman','flash']

// i.e. the spread operator spreads the value multiple of arrays into a new single array.
// It has a benifit that any number of arrays can be spread at a same time into a new array.

//** Flat --> creates a single flat array from array inside array....for Eg:-

let arrayOne = [1,2,3,4,[4,5,6,7],8,9,[2,3,4,[5,4,3,[3,21]]]]

let usable_arrayOne = arrayOne.flat(Infinity);

console.log(usable_arrayOne);
// O/P --> [
//   1, 2, 3,  4, 4, 5, 6,
//   7, 8, 9,  2, 3, 4, 5,
//   4, 3, 3, 21
// ]

//i.e. Flat function gave us a simple spreaded array from a nested array.

//** Array.isArray() --> checks wheather the given input is array or not
console.log(Array.isArray("Vishal"));

console.log(Array.from("vishal"));
//i.e. Array.from() converts anything in form of array.

// Array.of() --> makes the array of multiple values and variables.

let num1 = 7;
let num2 = 9
let num3 = 2001

let num_arr = Array.of(num1,num2,num3);

console.log(num_arr);

// *************************************************