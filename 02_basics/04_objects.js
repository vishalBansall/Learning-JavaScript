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

console.log(Object.keys(obj2));
// Will give all the keys available in object.
// it gives key as output in 'array' form.

console.log(Object.values(obj2));
// Will give all the values available in object.
// it gives values as output in 'array' form.


console.log(Object.entries(obj2));
// Will give every key and value as array seperately inside an array.
