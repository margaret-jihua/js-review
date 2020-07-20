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