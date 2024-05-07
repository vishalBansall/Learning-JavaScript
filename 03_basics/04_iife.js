// Immediately Invoked Function Expressions (IIFE)

// to remove the pollution of global scope variables, we use IIFE functions....they are executed immediately after defining the function.

// syntax --> (definition)() ...i.e. two parenthesis will be used...1 for function definition and other for function execution.
// Eg.-->

(function chai() {
    // Named IIFE
    console.log("Hello user, I am IIFE function");
})();

// *Always end the iife function explicitely by using semi colon at the end.

// writing iife with arrow function -->

( () => {
    console.log("Hello user, I am 2nd IIFE function with arrow function");
})();

//****************IIFE done************************

//***Next class for JS Execution done on notebook***
