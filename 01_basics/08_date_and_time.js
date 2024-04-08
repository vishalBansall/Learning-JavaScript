// Date function:- Date()

//console.log(Date());

//Now to get the modified date only...we have many attributes for the same.
let myDate = new Date();
//console.log(myDate);

// 1st Method:- [It will give date in detailed format. - best way(personally)]
//console.log(myDate.toDateString());
// O/P --> Mon Apr 08 2024.

//2nd Method:- [It will give date in ISO format with mili seconds calculations.]
//console.log(myDate.toISOString());
//O/P --> 2024-04-08T18:07:09.201Z

//3rd Method:- [It will give date in JSON format with mili seconds calculations.]
//console.log(myDate.toJSON());
//O/P --> 2024-04-08T18:08:38.749Z

//4th Method:- [It will give date in local format]
//console.log(myDate.toLocaleDateString());
//O/P --> 4/8/2024

//5th Method:- [It will give date & time in local format]
//console.log(myDate.toLocaleString());
//O/P --> 4/8/2024, 6:10:40 PM

//6th Method:- [It will give local time]
//console.log(myDate.toLocaleTimeString());
// O/P --> 6:12:14 PM

//7th Method:- [It will give date & time (universal)]
//console.log(myDate.toString());
// O/P --> Mon Apr 08 2024 18:13:26 GMT+0000 (Coordinated Universal Time)

//8th Method:- [It will give Universal time]
//console.log(myDate.toTimeString());
// O/P --> 18:15:00 GMT+0000 (Coordinated Universal Time)

//9th Method:- [It will give GMT standard date & time]
//console.log(myDate.toUTCString());
// O/P --> Mon, 08 Apr 2024 18:16:24 GMT


//** --> Creating our own date:-

// Method 1:-

let myCreatedDate = new Date(2001,8,7);
//console.log(myCreatedDate.toDateString());
//O/P --> Fri Sep 07 2001

// ** The months in JS starts from 0 when we give it in array format.

let date2 = new Date(2001, 0, 1);
//console.log(date2.toDateString());
// O/P --> Mon Jan 01 2001

// Method 2:- [Giving time along with date]

let date3 = new Date(1999 , 11 , 12 , 23 , 55)
//console.log(date3.toLocaleString());
// O/P --> 12/12/1999, 11:55:00 PM

let date4 = new Date(1999 , 11 , 12 , 23 , 55)
//console.log(date3.toDateString());
// O/P -->Sun Dec 12 1999 [i.e. this method to console doesn't give the time with it...so its necessary to choose correct console method.]


// Method 3 :- [Giving date in string format in yy-mm-dd format]
let date5 = new Date("2024-12-12");
//console.log(date5.toLocaleString());
// O/P --> 12/12/2024, 12:00:00 AM

// Method 4 :- [Giving date in string format in mm-dd-yy format]
let date6 = new Date("08-14-2024");
//console.log(date6.toLocaleString());
// O/P --> 8/14/2024, 12:00:00 AM

//**********Timestamps in JS******************

// ** We get the timestamp in JS in mili seconds.
// ** We get the timestamp starting from 1st Jan - 1970 till now.

// For Eg:-

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// O/P --> numeric value will change every time as it is in mili seconds.

// Now to compare the time stamp with today we can use the timestamp of today and compare them both. For Eg:-

//console.log(myTimeStamp);
let newDate = new Date(2024,3,9);
let myTimeStamp2 = newDate.getTime();
//console.log(myTimeStamp2);

// Now here we can compare them both to get the exact timestamp.

// But this comparison will be in mili seconds, we can change it in seconds as well:-

//console.log(Date.now()/1000);
// To remove the decimal....we can use Math.floor

//console.log(Math.floor(Date.now()/1000));
// Now this timestamp is in seconds and easier to compare.


//*** --> ToLocaleString method:-

// This method has many other properties in it to modify the date o/p as per requirement.
// We can use Ctrl+Space to get suggestions in VsCode.

//For Eg:- ToLocaleString...

let newDate2 = new Date();
console.log(newDate2.toLocaleString('default', {
    //dateStyle: "full",
    weekday: "long",
    month:"2-digit",
    dayPeriod: "narrow"
}));

// This localeString have many attributes in terms of object to explore.
// Mainly weekday, Month attributes will be used.

//** --> Other simple functions in date we can get by date stored variable.get... [...is suggestions occured].