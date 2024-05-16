let myNums = [1,2,3,4,5,6,7,8,9,10]

const myNewNums = myNums.map( (item) => item+10)

// console.log(myNewNums);

// *** In maps we iterate the whole array and can return the values as well..

// Difference between map and filter is in filter we have to give some conditions to get the data ....but in map we just iterate and returns the values as per requirement.

// Difference between map and forEach is in forEach we cannot return any values...


// trying this code with forEach -->

let myNewNums2 = []
myNums.forEach( (i) => {
    myNewNums2.push(i+10)
})

// console.log(myNewNums2);
//O/p --> [  11, 12,13, 14, 15, 16, 17, 18, 19, 20 ]

// ***Chaining of map, filter -->

myNums = [1,2,3,4,5,6,7,8,9,10]

// let chainNums = myNums.map( (item) => item*10 )
//                       .map( (item) => item-2 )

// console.log(chainNums);
//O/P --> [8, 18, 28, 38, 48, 58, 68, 78, 88, 98]

let chainNums = myNums.map( (item) => item*10 )
                      .map( (item) => item-2 )
                      .filter( (item) => item > 50)

console.log(chainNums);

//O/P --> [ 58, 68, 78, 88, 98 ]

// ***i.e. we can do chaining of maps together or of maps,filters...and get the desired result as output

//*******************Map Done***********************


