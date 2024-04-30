// simple function syntax:-

function sayMyName() {
    // console.log("V");
    // console.log("I");
    // console.log("S");
    // console.log("H");
    // console.log("A");
    // console.log("L");
}

//console.log(sayMyName());

// Type 2:-

function addTwoNums(num1, num2) {
    return num1+num2;
}
let addition = addTwoNums(3,4);
//console.log(addition);


// Type 3:-
// Here giving some default value to parameters....

function loginUserMessage(username = "User"){
    if (username == undefined) {
        return (`Please enter a username...`)
    }
    return (`Welcome ${username} to Coding World...`);
}

let loginMessage = loginUserMessage(`Vishal`);

//console.log(loginMessage);


//*********Functions with Objects*************

//**When we do not know how many arguements the user will pass in a function, we take those arguements using "Rest" operator in parameter. For Eg:-

function calculateCartPrice(...num1) {
    return num1;
}

//console.log(calculateCartPrice(4,200,43,243,21,45));


//** Function with objects:-

const user = {
    bookName : `Rich Dad Poor Dad`,
    price : 400
}

function handleObject(anyObject) {
    console.log(`Book name is ${anyObject.bookName} and price is ${anyObject.price}`);
}

handleObject(user);
// Passing the object just by making on arguement

handleObject({
    bookName: `C++`,
    price : 999,
})

//** Passing arrays in functions:-

let myNewArr = [200,400,300,600];

function returnSecondValue(getArr){
    return (`The second value of array is: ${getArr[1]}`);
}

console.log(returnSecondValue(myNewArr));

//Passing the array directly:-
console.log(returnSecondValue([2,4,5,3,1]));
