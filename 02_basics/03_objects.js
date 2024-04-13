// There are two ways to create objects:-
// 1. As Literals
// 2. As Constructors --> it makes single ton always

// 1. Object literals-->

const jsUser = {
    name: "Vishal",
    age: 22,
    location: "goa",
    email: "vishal@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"]
}

// Two ways to access values of object -->
// 1. '.key' way --> mostly used method
// 2. '["key"]' way --> this method is advanced method

// console.log(jsUser.name);
// console.log(jsUser["email"]);

//* In JS the key of objects are taken as string only.

let newObj = {
    name: "Vishal",
    "full name": "Vishal Bansal",
    contact: 8508197000
}
// This full name key can only be accessed by square bracket method.
//console.log(newObj["full name"]);
//console.log(newObj["contact"])

//Way to declare use the symbol datatype in object

let mySym = Symbol("value1");

let obj3 = {
    name : "Vishal",
    [mySym] : "value2",
    key2 : "mobile"
}
// A symbol can only be defined in object as symbol type by using these square brackets.
// and can be accessed by using square brackets without inverted commas.
//console.log(obj3[mySym]);

// freeze --> freeze the object and no values can be changed later on

// Object.freeze(obj3);
// obj3.key1 = "Vishal";
// this obj.key1 will not give any error but will not get modified in the existing array.
// console.log(obj3);

// functions in objects-->
// Passing function in obj3 -->

obj3.greetings = function(){
    console.log("Hello user how are you...");
}
console.log(obj3.greetings);
//O/P --> [Function (anonymous)]
// This console will not execute the function and will return the whole function in console.

console.log(obj3.greetings());
//O/P --> Hello user how are you...
// This will execute the function and will return the o/p of function


obj3.greetingsTwo = function() {
    console.log(`Hello ${this.name}, How are you...`);
}
// By using 'this', we can access the other keys of the same object.
console.log(obj3.greetingsTwo());
//O/P --> Hello Vishal, How are you...

//**************************************************