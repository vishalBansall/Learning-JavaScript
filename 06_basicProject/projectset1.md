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

