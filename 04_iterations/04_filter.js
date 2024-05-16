const coding = ["js", "css", "python", "ruby", "java","cpp"]

const newCoding = coding.forEach( (item) => {
    return item
})

//console.log(newCoding);

// O/P --> undefined
// **i.e. We cannot return any value from forEach loop....we can only console log the values we want...
// It means we cannot store the values from forEach loop by returning it.


// Therefore we use map -->

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (nums) => nums > 4)

//console.log(newNums);

//O/P --> [ 5, 6, 7, 8, 9, 10 ]

// **In filter --> every value of array is iterated by loop but in filter we gives some conditions....so based on those conditions jo values conditions paas kr rhe hh vhi return hojati hh....

// Basic difference in filter & forEach is filter returns the value after checking condition....and forEach does not return any value.


const yourNums = [10,9,8,7,6,5,4,3,2,1]

let yourNewNums = yourNums.filter( (item) => {
    return item > 6
})

//console.log(yourNewNums);

//O/p --> [ 10, 9, 8, 7 ]

// ** Returning values in forEach loop forcefully -->

const myNums2 = []

myNums.forEach( (item) => {
    if(item < 6)
        {
            myNums2.push(item)
        } 
} )

//console.log(myNums2);
// O/P --> [ 1, 2, 3, 4, 5 ]


//*******More works with filter -->


let books = [
    {title:'Book one' , genre: 'Fiction' , publish: '1981', edition: '2001'},
    {title:'Book two' , genre: 'Non-Fiction' , publish: '1992', edition: '2008'},
    {title:'Book three' , genre: 'History' , publish: '1990', edition: '2002'},
    {title:'Book four' , genre: 'Science' , publish: '1981', edition: '2005'},
    {title:'Book five' , genre: 'Geography' , publish: '1971', edition: '2007'},
    {title:'Book six' , genre: 'Fiction' , publish: '1992', edition: '2010'},
    {title:'Book seven' , genre: 'Non-Fiction' , publish: '1999', edition: '2014'},
    {title:'Book eight' , genre: 'History' , publish: '1989', edition: '2003'},
    {title:'Book nine' , genre: 'Science' , publish: '1984', edition: '1999'},
    {title:'Book ten' , genre: 'Geography' , publish: '1987', edition: '1998'},
    {title:'Book eleven' , genre: 'History' , publish: '1982', edition: '1990'},
]

let userBooks = books.filter( (bk) => bk.genre === 'Fiction')

//console.log(userBooks);
//** This will filter the books only which have genre as Fiction...

userBooks = books.filter( (bk) => {
    return bk.publish > 1980 && bk.genre == 'History'
})

console.log(userBooks);

// ** This will return the books which are published after 1980 & has a genre of History.


// ** In this form the data comes from database and we filter that data as per user requirement.


// ***********Filters done*************************