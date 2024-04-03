// String Interpolation:-
let myName = "Vishal";
let myAge = 22;

//console.log(`Hello, My name is ${myName} and my age is ${myAge}`);
//--> this method of using backticks is modern and cleaner way to console the o/p.

// We can do many things on the go with this method....like ${name.toUpperCase}...etc.

//**-->New method to define/declare string

const name = new String('Vishal-Bansal');
//--> with this method we get many diffent things...1. this string will be available with indexing of key:value pair already....like array[but not array].
//-->2. We can use prototype functions to this string directly without writing the __proto__ keyword...for eg [name.toUppercase].
//-->3. We can access the string with indexing...for eg console.log(name[2])...o/p --> 's'.
//--> to see the various functions avalable with this method we can console this string in console section of browser.
// Running through code -->

console.log(name[3]);
console.log(name);

//Changing string to uppercase.
console.log(name.toUpperCase());

// finding index of element.
console.log(`The index of character "s" is ${name.indexOf('s')}`);

// finding character at any index.
console.log(`The character at index 5 is ${name.charAt(5)} `); // 5 is the index

//finding the length of string.
console.log(`The length of string is ${name.length}`); 

// getting a sub string
let newStr = name.substring(0,6);// 5 index will not be counted.
console.log(`The substring upto index 5 is ${newStr}`);

// using slice for getting new string
let anotherStr = name.slice(-12,6);
console.log(`The new string made using slice is ${anotherStr}`);
// **--> The difference between slice and substring is in slice we can work from reverse of string.

// --> Trim - Used to remove spaces for start & last of a string ..For eg:-
let newStr1 = "   Vishal    ";
console.log(`The new value of string without space is ${newStr1.trim()}`);
// O/P will be 'Vishal' without any space at start or end.
// trimStart() & trimEnd() are used to remove space from start & end respectively.

//--> Replace - Used to find and replace some values from sting.
let url = "https://vishal.com/vishal%20bansal"

console.log(url.replace('%20' , '-'));
// first we write what to replace and then with whom to replace.

//--> Includes - checks if the string includes particular key or not...for eg:-
console.log(url.includes('vishal'));
console.log(url.includes('abhishek'));

//--> Split string into arrays - split()
let arr = name.split('-'); 
// '-' is the seperator for array...it can be " " space or anything.
console.log(`The new array from string is ${arr}`);
// we can directly console this also.
console.log(url.split('/'));

//********************************************