let a = 10 // --> block scope
const b = 20 // --> block scope
var c = 30 //--> Functional scope [Majorly ignored]

console.log(a);
console.log(b);
console.log(c);

//***********Nested Scopes********************

// --> child will have th access to parent variables but parent will not have the access to child variables.


// ++++++++++++Interesting +++++++++++++++++++
// --> Techniques to write functions:-

//Method 1:-

function addOne(num){
    return num + 1;
}

addOne(4);


// Method 2:-

let addTwo = function(num){
    return num + 2;
}

addTwo(5);

// Both the methods are same....Here this 'addTwo' variables are called as expression.