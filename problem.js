// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
function isInside(array, ele){
    if (array.indexOf(ele) !== -1){
        return true
    }
    else {
        return false
    }
}

console.log(isInside(['taylor', 'rome', 'adam'], 'rome'));
console.log(isInside(['pete', 'adam', 'taylor'], 'fred'));

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
console.log(reverseStr('General Assembly'));

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

function luckySevens(max){
    let result = []
    for (let i = 7; i <= max; i++){
        if (i % 7 === 0){
            result.push(i)
        }
    }
    return result
}

console.log(luckySevens(25));
console.log(luckySevens(42));

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

function copyMachine(element, num){
    let array = []
    for (let i = 0; i < num; i++){
        array.push(element)
    }
    return array
}

console.log(copyMachine('candy', 0));
console.log(copyMachine('candy', 2));
console.log(copyMachine('bread', 4));
console.log(copyMachine(11, 6));

// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

function everyOtherWord(sentence){
    let array = sentence.split(' ')
    let result = []
    for (let i = 0; i < array.length; i += 2){
        result.push(array[i])
    }
    return result
}

console.log(everyOtherWord('hello how are you doing on this lovely day?'));
console.log(everyOtherWord('the weather is wonderful'));

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

function wordYeller(sentence){
    const punctuation = ['.', ',', '!', '?', ';', ':']
    let array = sentence.split(' ')
    let result = []
    for (let i = 0; i < array.length; i++){
        word = array[i]
        lastIndex = word.length - 1        
        if (!punctuation.includes(word[lastIndex])){
            result.push(word.concat('!'))
        }
        else{
            result.push(word)
        }
    }
    return result.join(' ')
}

let words = "Go to the store and grab the following: milk, bread, run, and cake";
console.log(wordYeller(words));

let sent = "Stop it now! Please, wont you stop?";
console.log(wordYeller(sent));

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

function arraySubstring(words, str){
    let array = []
    for (let i = 0; i < words.length; i++){
        let word = words[i]
        if (word.search(str) !== -1){
            array.push('true')
        }
        else {
            array.push('false')
        }
    }
    return array
}

console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"));
console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"));


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

function evenCaps(sentence){
    let array = sentence.split('')
    let newArr = []
    for (let i = 0; i < array.length; i ++){
        let word = array[i]
        if (i % 2 === 0){
            newArr.push(word.toUpperCase())
        }
        else{
            newArr.push(word)
        }
    }
    let str = newArr.join('')
    return str
}

console.log(evenCaps("Tom got a small piece of pie"));
console.log(evenCaps("the book is in front of the table"));