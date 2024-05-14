// For of, for each, for in loops will be done
// **These loops are array specific loops.

// 1. For of loop -->

const arr = [12,2,3,4,5]

for (const i of arr) {
   // console.log(i);
}

// loop me bs variable ka name or array ya jis pe bhi loop chlana hh vo pass krdenge or loop khud hi chl jaega...
// or jo variable ka name diya hh for eg. 'i', vahi print krenge to array me jo value hogi vo print hogi...mtlb arr[i] krne ki jrurt nhi hh....

const greetings = "hello duniya, Namaste!"

for (const greet of greetings) {
    //console.log(`char is ${greet}`)  
}

// Maps --> Collection of key-value pair....does not contain any duplicate value.
// Also remembers the order of insertion.

const map = new Map()
map.set('name', 'Vishal')
map.set('Mobile' , '8508197000')
map.set('Company', 'JTEKT')

// Now to access this map by forOf loop has a syntax difference.
// For map we will do array destructure in forOf loop -->

for (const [key, value] of map) {
   // console.log(`${key} :-  ${value}`);
}

// Object with forOf loop:-

const myObj = {
    game1 : "NFS",
    game2 : "SanAndreas"
}

for (const [key, value] of myObj) {
    console.log(`${key} :-  ${value}`);
}

//O/P --> TypeError: myObj is not iterable

// i.e. we cannot iterate object with forOf loops.


//******Continuing loops in next file*********