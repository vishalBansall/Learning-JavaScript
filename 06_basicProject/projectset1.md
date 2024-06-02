# projects related to DOM

# Solution Code

## Project - 1 [Change background as selected color]

```javascript
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((i) => {
  i.addEventListener('click', function (e) {
    // console.log(e)
    // console.log(e.target)
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```


## Project - 2 [BMI Calculator]

```Javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (item) {
  item.preventDefault();

  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);

  let results = document.querySelector('#results');

  if (height == '' || isNaN(height) || height <= 0) {
    results.innerText = 'Please enter a valid height in cm';
  } else if (weight == '' || weight <= 0 || isNaN(weight)) {
    results.innerText = 'Please enter a valid weight in Kg';
  } else {
    let bmi = (weight / (height / 100) ** 2).toFixed(3);

    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is ${bmi}, Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Your BMI is ${bmi}, Normal Range</span>`;
    } else {
      results.innerHTML = `<span>Your BMI is ${bmi}, Over Weight</span>`;
    }
  }
});
```

## Project - 3 [Digital Clock]

```Javascript
const clock = document.getElementById('clock');

// setInterval --> used to recall the function after every selected time duration.

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project - 4 [Guess Random Number]

```Javascript
// Random Number:-

let randomNumber = parseInt(Math.random() * 100 + 1);

// console.log(randomNumber)
let submit = document.querySelector('#subt');

let userInput = document.querySelector('#guessField');

let previousGuesses = document.querySelector('.guesses');

let guessRemaining = document.querySelector('.lastResult');

let lowOrHigh = document.querySelector('.lowOrHi')

let startOver = document.querySelector('.resultParas')

// Creating a para -->

let p = document.createElement('p')


let prevGuess = [];

let numGuess = 1;

let playGame = true;

if(playGame)
{
  submit.addEventListener('click' , function(i){
    i.preventDefault()

    let guess = parseInt(userInput.value)
    
    validateGuess(guess)
  })
}

function validateGuess(guess){
    if(guess < 1 || guess > 100 || isNaN(guess))
    {
      alert("Please enter a valid number");
    }
    else{
          prevGuess.push(guess)
          if(numGuess > 10)
          {
            displayAndCleanGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
          }
          else
          {
            displayAndCleanGuess(guess)
            checkGuess(guess);
          }
    }
}

function checkGuess(guess){
   if(guess == randomNumber)
   {
     displayMessage(`You Won, the guess was right`)
     endGame()
   }
   else if(guess< randomNumber)
   {
     displayMessage(`Number is too low.`)
   }
   else
   {
     displayMessage(`Number is too high`)
   }
}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function displayAndCleanGuess(guess){
    userInput.value = '';
    previousGuesses.innerHTML += (`${guess} , `);
    guessRemaining.innerHTML = `${10 - numGuess}`
    numGuess++
}

function endGame()
{ 
      playGame = false;
      userInput.value = '';
      userInput.setAttribute('disabled', '')
      p.classList.add('button')
      p.innerHTML = `<h2 id = "newGame">Start new game</h2>`

      startOver.appendChild(p)
      newGame()
}

function newGame() 
{
    let startGame = document.querySelector('#newGame')

    startGame.addEventListener('click' , function(e)
    {
      userInput.value = ''
      numGuess = 1;
      randomNumber = parseInt(Math.random() * 100 + 1);
      userInput.removeAttribute('disabled')
      prevGuess = []
      previousGuesses.innerHTML = ''
      guessRemaining.innerHTML = `${11 - numGuess}`
      startOver.removeChild(p)
      
      playGame = true;
    })
}

```