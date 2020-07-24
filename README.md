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

## Prototypal Inherit

Use `.__proto__ ` on one object to inherit from another object

```
const dog = {
    name: "Michael",
    goodBoy: true,
    gendar: 'boy'
}

const dogTwo = {
    name: 'Rocco'
}

dogTwo.__proto__ = dog

console.log(dogTwo.goodBoy); // true
console.log(dogTwo.gendar); // 'boy'
```

## Fetch

Grab data from API sites

```
fetch('http://api.github.com/users/margaret-jihua')
.then(response => {
    return response.json()
})
.then(data => {
    let githubURL = data.url
    let githubUSername = data.login
    let githubName = data.name
})
```
## Constructor Function

Capitalize the first letter of function name
let varible = `new` FunctionName

```
function Menu(appitize, mainDish, dessert){
    // this = {}
    this.appitize = appitize
    this.mainDish = mainDish
    this.dessert = dessert
    this.intro = function(){
        console.log('Welcome to Our Restaurant!')
    }
    //return this
}

let lunch = new Menu ('sushi','beef','cake');
console.log(lunch);
lunch.intro();
```

## Class

Contains a  constructor function
Capitalize the first letter of class name
let varible = `new` ClassName

```
class GithubProfile {
    constructor(username, name, url){
        this.username = username
        this.name = name
        this.url = url
    }   
    intro() {
        console.log(`My name is ${this.name} and my username is @${this.username}`);
    }
}

let mars = new GithubProfile(githubName, githubName, githubURL)\
mars.intro()
```

## promises

```
var isMomHappy = true;
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
)
willIGetNewPhone.then(result => {
    console.log(result)
})
```

## Async/Await
```
async function printFacebook(){
      let facebookEndpoint = 'http://api.github.com/users/facebook'
      let facebook = await fetch(facebookEndpoint).then(res => res.json())
      console.log(facebook.login);
  }

  printFacebook()
```