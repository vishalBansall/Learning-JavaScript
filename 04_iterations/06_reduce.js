let myNums = [1,2,3]

let initialValue = 0;

let myTotal = myNums.reduce( (accumulator , currentValue) => {
    return accumulator + currentValue
}, initialValue)

// console.log(myTotal);

// Reduce --> reduce bhi ek array pe loop ki trh chlta hh but isme hme ek value return hoti hh jo hmm chahte hh kuch operation kr ke...
// isme bhi ek callback function hota hh jisme hmare paas ek accumulator hota hh or ek current value hoti hh....ab accumulator me starting me hm khud se initial value btate hh...or uske baad vo current value ke sath operation krta hh....or fr operation se baad current value array ki next value pe chli jaati hh or accumulator me jo abhi operation hua vo store ho jata hh...
// ye process chlta rehta hh hmari array ki length tk ya fr hmari conditions tk...or fr at the end jo value bni hoti hh vo return ho jati hh...

// For eg -->

myNums = [10,20,30,40]
let iV = 0
let MyNumsSum = myNums.reduce( (aC , cV) => {
    return aC + cV
},iV )

console.log(MyNumsSum);
// O/P --> 100


// Eg 2. -->

let shoppingCart = [
    {
        itemName: 'jsCourse',
        price : 2999
    },
    {
        itemName: 'pyCourse',
        price : 999
    },
    {
        itemName: 'mobileDevelopment',
        price : 4999
    },
    {
        itemName: 'dataScience',
        price : 11999
    }
]

let cartTotal = shoppingCart.reduce( (acc,curVal) => {
    return acc + curVal.price
},0 )

console.log(cartTotal);

//O/P --> 20,966


//*****************Reduce Done***********************