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

