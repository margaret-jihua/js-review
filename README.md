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

