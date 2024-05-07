const user = {
    name : "Vishal",
    age : 22,
    price : 999,
    
    welcomeMessage : function(){
         console.log(`${this.name}, Welcome to the website....`);
    }
}

//user.welcomeMessage()
//** 'this' keyword provides the access for current context of an object.


//**In Node JS enviroment , If we will use 'this' outside an object like - console.log(this)....then we get the empty object as output...i.e. {}.
// ** In browser engine, if we use 'this' outside object....then we get window and other current context as output


//** Using this keyword in function -->

function exp() {
    console.log(this);
}
//exp();

//********************************************
// O/P --> <ref *1> Object [global] {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Function: structuredClone],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 29.111996999010444,
//       nodeStart: 2.072070999071002,
//       v8Start: 4.5076550003141165,
//       bootstrapComplete: 22.89537600055337,
//       environment: 11.604093000292778,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1715105748841.784
//   },
//   fetch: [AsyncFunction: fetch]
// }

// ******************************************

// i.e. this contains some value in it...but if we use this.username in function we get o/p as undefined......therefore we can say that 'this' keyword only works in object.


//********************************************

// Arrow functions -->

const exp2 = () => {
    console.log(this);
}

//exp2()
//O/P --> {}

// Arrow function -->
//1. Basic arrow function:-

const addThree = (num1, num2, num3) => {
    return num1+num2+num3
}

console.log(addThree(3,4,1))
//O/P --> 8

//2. Implicit returned arrow function:-

const addFour = (num1,num2,num3,num4) => num1+ num2 + num3 + num4

console.log(addFour(2,3,4,5))
// o/p --> 14
//i.e. if we have a single line of return statement we can use implicit method of arrow function.
// We can use () 'parenthesis' for the output value....we do not require return keyword in parenthesis.

//************Basics of arrow function & this keyword ends******************************

