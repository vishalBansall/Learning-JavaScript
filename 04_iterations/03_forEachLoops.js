// ** ForEach loops --> Mostly used.

const coding = ["js", "css", "python", "ruby", "java","cpp"]

coding.forEach( function (i /*parameters to pass*/){
   // console.log(i);
} )

let arr2 = ["name", "class", "roll"]

arr2.forEach( function(item){
   // console.log(item);
} )

// ** We can use arrow functions also for callback functions...for eg-->

arr2.forEach( (a) => {
   // console.log(a);
}  )


//** We can use external function as callback function as well...
function printMe(item) {
    console.log(item);
}

//coding.forEach(printMe)



//** In forEach loop we always get three things from array
// 1. Current iteration element
// 2. Index of current element/ iteration
// 3. full array list/value.

coding.forEach( (item, index, arrList) => {
   // console.log(item, index, arrList);
}) 


//****Accessing array of object....


const myArr = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    }
]

myArr.forEach( (item) => {
    console.log(item.languageName);
} )


//**********forEach Loops done*********************

// ** Some other loops will be done in next lecture