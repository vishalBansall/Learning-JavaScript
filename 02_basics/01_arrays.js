// Arrays - collection of data
// Data can be of multiple types.

// array --> object.
// JS arrays are resizeable.
// array always makes shallow copies....(i.e. arrays are pass by reference.)

// Ways to declare arrays:-
// Method 1:-

const arr = ["vishal", 22, "Male"];

const arr2 = new Array("Vishal Bansal", 8508197000, 22 ,"Male")
//console.log(arr);
//console.log(arr2[0].length);

// Array methods --> 

// ** Push:- [Inserts new element at last of array]

let myArr = new Array(1,2,3,4,5,6);
myArr.push("vishal");

//console.log(myArr);

// ** Pop :- [Deletes the last element of array]

myArr.pop();
//console.log(myArr);

// ** Unshift :- [Inserts new element in the begining of array and shift all the already existing elements in right.]
myArr.unshift("vishal");
// console.log(myArr);

// ** Shift:- [Deletes the 1st element of array and shifts all the remaining elements to the left]
myArr.shift();
//console.log(myArr);

// ** slice --> [Makes a copy of the required portion of array .. the required area is selected from where to where.] For eg.-->

//let sliceArr = myArr.slice(0,4);
// console.log(`The original array is ${myArr}`);
// console.log(`The sliced array is ${sliceArr}`);

// O/P --> 1,2,3,4. [i.e. last entered index is not included in slice]
// The original array remains same in the slice and a copy of it is made.


// ** Splice --> [Makes a cut & extracts some portion of original array to a new array.]

// let splicedArr = myArr.splice(0,3);
// console.log(`The spliced array is ${splicedArr}`);
// console.log(`The original array is ${myArr}`);

// O/P --> [1,2,3 i.e. last entered index is not included in splice also]
// The original array also gets changed and only the remaining portion is left in original array after spliced is used.


// ** Includes:- [Tells weather the array include key or not.]

console.log(myArr.includes(10));
// O/P --> False

// ** indexOf --> [Tells the index of key]
console.log(myArr.indexOf(10));
//O/P --> -1 [i.e. The element not found in array.]


// ** Join --> converts and returns the array as a string.

let arr1 = new Array("Vishal", "Bansal" , 22, 8508197000)

console.log(arr1.join("&"));
// By default the array is , sepearted in string but we can make it seperated by anything we want like " " or & or anything..

//*************Array Part 2 ******************

