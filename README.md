# JavaScript Review
This is my review of JavaScript with README

## Example of Data Type
```javascript
let name = 'Mars'
let age = 23
let isCool = true 
const friends = ['Amy', 'lucy', 'zoey']
const tesla = {
    industry: 'Electric Cars',
    ceo: 'Elon Musk',
    yearFounded: 2003,
    foundingMembers: ['Elon Musk', 'JB straubel', 'Martin Eberard'],
    stockTicker: 'TESLA',
    vehicals: {
        vehicalOne: 'Model S',
        vehicalTwo: 'Model X',
        vehicalThree: 'Model 3'
    },
    print: function(){
        console.log('Hello, this works with objects');
    }
}
```

## Functions
```javascript
//standard function
function add(num1, num2){
    return num1 + num2
}

// function expression
const multiply = function(num1, num2) {
    return num1 * num2
}

//arrow function
const substract = (num1, num2) => {
    return num1 - num2
}
```

## DOM
```
const container = document.querySelector('.container')
console.log(container);

//create an element
const headerTwo = document.createElement('h2')
headerTwo.textContent = 'My First JS review'

container.appendChild(headerTwo)

//add class to headerTWo
headerTwo.classList.add('subtitle')
headerTwo.setAttribute('class', 'header-two') // subtitle will be overwrite by header-two
headerTwo.classList.remove('header-two')
```

## EventListener
```
const headerThree = document.createElement('h3')
headerThree.textContent = 'Friends'
container.appendChild(headerThree)

const list = document.createElement('ul')

for (let i = 0; i< friends.length; i++){
    let eachFri = friends[i]

    const listItem = document.createElement('li')
    listItem.textContent = eachFri

    list.appendChild(listItem)
}

headerThree.addEventListener("click", function(){
    container.appendChild(list)
})
```

## Problem Solving
Ask youself these questions when solving problems
- [ ] Do I understand what the prompt is asking?
- [ ] Am I able to break the problem down?
- [ ] What is my strategy for solving the problem?
- [ ] Do I understand what my code is doing?
- [ ] Am I able to foresee any edge cases?
- [ ] Am I able to track the order of the code that is being executed?
- [ ] Am I able to track the values of the variables?
- [ ] Am I able to walk through my code line by line with an example?
- [ ] Do I have a working solution?

# JS Problem Solving
Practice pair programming for each problem. Switch roles every 10 mins.
Be sure to `console.log` to make sure that you got a working solution.
Ask yourself the following questions with each problem:
- [ ] Do I understand what the prompt is asking?
- [ ] Am I able to break the problem down?
- [ ] What is my strategy for solving the problem?
- [ ] Do I understand what my code is doing?
- [ ] Am I able to foresee any edge cases?
- [ ] Am I able to track the order of the code that is being executed?
- [ ] Am I able to track the values of the variables?
- [ ] Am I able to walk through my code line by line with an example?
- [ ] Do I have a working solution?
### isInside
```js
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
```
### reverseStr
```js
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('General Assembly'); //=> 'ylbmessA lareneG'
```
### luckySevens
```js
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]
```
### copyMachine
```js
// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]
```
### everyOtherWord
```js
// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]
```
### wordYeller
```js
// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// let sent = "Stop it now! Please, wont you stop?";
// let yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// let words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
```
### arraySubstring
```js
// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]
```
#### evenCaps
```js
// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"
```