// Data Tpyes

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
        console.log('Hello, the ceo of Tasla is ' + this.ceo);
    }
}

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);
console.log(tesla.vehicals.vehicalThree);
console.log(tesla['vehicals']['vehicalThree']);
tesla.print();

// Functions

function printFriends(array){
    array.forEach(friend => {
        console.log(friend)
    })
}

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

// DOM: document object model

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

console.log(headerTwo);

// Eventlistener
headerTwo.addEventListener("click", function(){
    headerTwo.textContent = "Mars"
})

// make another element
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


// Problem Solving

// what to start with
// what do I hope to end up with

// understand the problem
// where the issue start and ..

// break it down into more manageable prblems

// fizzBuzz
// if number is divisbale by 3 and 5 === FizzBuzz
// if number is divisibale by 3 === Fizz
// if number is divisibale by 5 === Buzz

// - [ ] Do I understand what the prompt is asking?
// - [ ] Am I able to break the problem down?
// - [ ] What is my strategy for solving the problem?
// - [ ] Do I understand what my code is doing?
// - [ ] Am I able to foresee any edge cases?
// - [ ] Am I able to track the order of the code that is being executed?
// - [ ] Am I able to track the values of the variables?
// - [ ] Am I able to walk through my code line by line with an example?
// - [ ] Do I have a working solution?

/*
I need to set up an empty 
iterate through the array that going to be passed in
check the remainder of each element
push the result of each elememnt inside the result array
return the result array
*/

function FizzBuzz(arr){
    let result = []
    arr.forEach(e => {
        if (e % 3 === 0 && e % 5 === 0){
            result.push('FizzBuzz')
        }
        else if (e % 3 === 0){
            result.push('Fizz')
        }
        else if (e % 5 === 0){
            result.push('Buzz')
        }
        else {
            result.push(e)
        }
    })
    return result
}


console.log(FizzBuzz([3,5,15,20,7]));

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('General Assembly'); //=> 'ylbmessA lareneG'

// create a function pass by a str
// create a empty string
// put .reverse
// return string of chacters in reverse

function reverseStr(str){
    let newStr = ''
    let newArr = str.split('');
    newArr = newArr.reverse();
    newStr = newArr.join('');
    return newStr;
}

console.log(reverseStr('bootcamp'));