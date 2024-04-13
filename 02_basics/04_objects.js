// 2. Objects as constructor --> single ton objects

//const tinderUser = new Object() --> single ton object

// const tinderUser = {} --> non single ton object

// Here, Both are same internally but one is single ton and other is not.

//** Nesting of objects-->

let obj1 = {
    email: "someone@gmail.com",
    fullName_contact : {
        userName : {
            firstName: "Vishal",
            lastName : "Bansal"
        },

        contactNo: {
            mobileNo: 8508197000,
            telephoneNo: "01262000000",
        }
    }
}

//console.log(obj1.fullName_contact.userName.firstName);

//console.log(obj1.fullName_contact.contactNo.mobileNo);


//** combining the values of multiple objects in another object...

let obj3 = {key1: "a" , key2: "b" , key3: "c"}
let obj2 = {key4: "d" , key5: "e" , key6: "f"}

//Method 1 -->
let combinedObj = Object.assign({}, obj3,obj2);
//--> here '{}' are the target where values will be combined

//console.log(combinedObj);

// Method 2 --> Spread operator
let combinedObj2 = {...obj3 , ...obj2 };

//console.log(combinedObj2);

//** Other interesting things in objects

//console.log(Object.keys(obj2));
// Will give all the keys available in object.
// it gives key as output in 'array' form.

//console.log(Object.values(obj2));
// Will give all the values available in object.
// it gives values as output in 'array' form.


//console.log(Object.entries(obj2));
// Will give every key and value as array seperately inside an array.

// ** hasOwnProperty --> sometimes we just loops on an array for searching some values but in some cases if there is a key with no value...then there are chances for loop to crash.
// In those cases we just simply ask the object to check weather it has that property or not before executing the loop.

//console.log(combinedObj2.hasOwnProperty('key5'));
//O/P --> true;

//console.log(combinedObj2.hasOwnProperty('key9'));
// O/P --> false

// mtlb isse simply check krte hh ke object ke andr vo key ya value hh ke nhi...hmm basically kisi value ko use krne se pehle check kr skte hh ke us object me vo key ya value hh ke nahi..

//********************************************

//*********Object part - 3********************


// ** De-structuring of object

let course = {
    courseName: "Learning JS on YT",
    courseFees: "100",
    courseDuration: "6 Months"
}

// Now if we want to access this object-->

//console.log(course.courseName);
// but if we want to use this course name many times....then its difficult to write course.courseName...etc,etc again & again
// Therefore, we use de structuring to solve this
// to de structure this -->

let course2 = {
    courseName: "Coding Ninjas Job Bootcamp",
    courseFees: "160000",
    courseDuration: "1 Year"
}

let {courseName} = course2;
// This is now de structured, we can use this courseName directly for our use.

console.log(courseName);
// If we want to give another name instead of this courseName -->

let {courseName : name} = course2;
// Now we can access 'courseName' value of 'course2' object with variable 'name'.

console.log(name);

//** This de structure is mostly used in reactJS...


//**************API's*************************

//APIs are just some data fetch from the database....
// (apna kaam dusre pe daalna)
// APIs are mostly taken in JSON object format or JSON array of object format...

//JSON Object Format-->
// {
//  name: asdsdasd,
//  asda:asdasdas,
// }

//JSON array of object format -->
// [
//     {},
//     {},
//     {},
// ]

//JSON --> JS object notation

//********************************************