// iterating object by loops-->

const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    python : 'python',
    css : "Casceding Style Sheet"
}

// We can iterate object with forIn loops...

for (const key in myObject) {
   // console.log(`${key} :-  ${myObject[key]}`);
}


// ****Trying forIn loop on arrays:-

const arr = ["js",'c++','adas']

for (const key in arr) {
    console.log(arr[key]);
}

//The differnce b/w forOf & forIn loop in arrays is in forOf loop we get the arr element as o/p if we print the key. So we don't require arr[key] to print o/p. We just write console.log(key) to get element as o/p.

// but in ForIn loop we get the key as o/p if we print the key. So we require arr[key] to get element as o/p.


// *** We cannot use forIn loop to iterate map.


