const score = 400;

//console.log(score);

// Explicitly defining a number - Newer way.
const num = new Number(300);
//console.log(num);
// now in this situation when we define the type as number explicitly--> we get multiple properties through prototype.
// We can see this in console.
// For Eg-->

//console.log(num.toString().length);
// Here it will convert the number into string and will return the length of that string on the run time only.
// i.e. we can use string properties after converting the number to string.

//toFixed --> Provides the decimal value upto the defined precision value. For eg:-

//console.log(num.toFixed(3));
// It will provide the value of three decimal precision here.

// Precision --> It provide the precise value of defined length after round off the addiitional values.
// It return as string. For Eg-->

let otherNumber = 443.82423;

//console.log(otherNumber.toPrecision(3));
// Note --> Precision will consider the entered value from starting only...and not from decimal points.....so precise calculation should be done before using it.

let num2 = 10000002400;
// LocalString --> It converts the number to string and shows it with comma for better understanding and counting. For eg:-

//console.log(num2.toLocaleString('en-IN'));
// here 'en-IN' is for to adjust comma to indian number style.

// MAX & MIN VALUE::-

// Max Value :- Number.MAX_VALUE;
//Min Value :- Number.MIN_VALUE;


//***************MATHS************************
//--> Math is a inbuilt library of JS with many properties.
//--> Math is basically object type.
//For Eg:-
//console.log(Math);

// To check the various functions of Math library...we can console it in browser to check them.
// For Eg:-
//console.log(Math.abs(-4.654));
// It will change the -ve value to a +ve value
// The +ve value will remain +ve.

//console.log(Math.round(483.984));
// It will round-off the value to its nearest integer.

//--> Math.min --> It will return the lowest value from a given array.
//console.log(Math.min(4,3,2,5,6,1,5));

//--> Math.max --> It will return the maximum value from a given array.
//console.log(Math.max(4,3,5,6,10,32,12,54));

// *******Most Important Math function********

// --> Math.random() --> It will give us the random values between 0 & 1 only [including 0 & 1 also].
// --> We can deal with it using simple maths for getting the required results.

// For Eg:-

//console.log(Math.random());
// Now to get the value in integer we can * it with 10.
// And to make sure that the value is atleast 1 --> we can add 1 in it.

//console.log((Math.random()*10) + 1);

// To get the lowest value of integer without decimal...we can wrap it in Math.floor

//console.log(Math.floor(Math.random()*10)+1);

// This will give me the random value from 1 to 10.

//--> Now to get the random value in a certain defined range.
// We can use simple maths calculations.
let min = 15;
let max = 25;
console.log(Math.floor(Math.random()*(max-min + 1)) + min);
