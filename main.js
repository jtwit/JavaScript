console.log("starting javascript...")

const log = console.log

// exercise 1
var myName = "Jo"
log(myName)
document.write(myName)

// exercise 2
var age = 35
log(age)

// exercise 3
var juliaAge = 32
var ageDiff = 35 - 32
log(ageDiff)

// exercise 4 
if (age > 21) {
    document.write("You are older than 21")
}
else {
    document.write("You are not older than 21")
}

// exercise 5

if (age > 32) {
    log("Julia is younger than you")
}
else if (age < 32) {
    log("Julia is older than you")
}
else {
    log("You have the same age as Julia")
}

// exercise 6
var myArray = ["Jo", "Katia", "Antje", "Lucas", "Anastasiia", "Agnita", "Sarah"]
myArray.sort();
var first = myArray[0]
log(first)
var last = myArray[6]
log(last)

// var mytestarray = [5, 8, 9, 17];
// for (var i = 0; i < 4; i++) {
//     log(mytestarray[i]);
// }

for (let i = 0; i < 7; i++) {
    log(myArray[i]);
}

// when you don't know the array length
var lastItem = myArray[myArray.length - 1]
log(myArray.length)


// exercise 7
var ageArray = [35, 28, 12, 21, 32, 19, 60];
log(ageArray)

let i = 0
while (i < 7) {
    if (ageArray[i] % 2 == 0) {
        log(ageArray[i]);
    }
    i++
}

for (let i = 0; i < 7; i++)
    if (ageArray[i] % 2 == 0) {
        log(ageArray[i]);
    }

// exercise 8

// var testArray = [1, 2, 3];
// var min = Math.min(...testArray)
// log(min)

var testArray = [1, 2, 3];
var min = Math.min(...testArray)
log(min)

// playing with fuctions

function myfunction() {
    log("hihi")
}

myfunction()

const mynextfuction = function () {
    log("howdy")
}

mynextfuction()

var testArray = [1, 2, 3];
const anotherfunction = function (testArray) {
    let min = Math.min(...testArray)
    log(min)
}

anotherfunction(testArray)


// exercise 9

var testArray = [76, 42, 101];
const maxfunction = function (testArray) {
    let max = Math.max(...testArray)
    log(max)
}

maxfunction(testArray)

// exercise 10

var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1
const newfuction = function (array, index) {
    log(array[index])
}

newfuction(array, index)

// exercise 11 to be continued...

// var array11 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
// const duplicatefuction = function (array11) {
//     for (let i = 0; i < 22; i++) {
//         for (let j = 0; j < 22; j++) {
//             if (i !== j) {
//                 if (array11[i] === array11[j]) {
//                     log([i])
//                 }
//             }
//         }
//     }
// }




// duplicatefuction(array11)

// if (array11[i] % 2 == 0)
//     log(array11[i])

// const duplicatefuction = array11 => log(array11);

// duplicatefuction(array11)

// exercise 11 take 2

// var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

// function dupFunction(array) {
//     array.sort(); {
//         let i = 0
//         for (let i = 0, i < array.length, i++) {
//             if (i - (i + 1) = 0)
//         }
//     }
//     log(array)
// }

// dupFunction(array)

// exercise 11 final final

var numbers = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100]
console.log(numbers.length)

function duplicateFunction(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        numbers.sort((a, b) => a - b)
        if (numbers[i] === numbers[i + 1]) {
            console.log(numbers[i] + " is a duplicate")
        }
    }
}

duplicateFunction(numbers)

// exercise 12

var myColor = ["Red", "Green", "White", "Black"];

function stringFuction(myColor) {
    console.log(myColor.toString())
}

stringFuction(myColor)

// exercise 13

var x = 32443

function reverseFunction(x) {
    console.log(x.toString().split('').reverse().join(''))
}

reverseFunction(x)

// exercise 14

var x = 'webmaster'

function alphabeticalFunction(x) {
    console.log(x.toString().split('').sort().join(''))
}

alphabeticalFunction(x)

// exercise 15

// var x = "prince of persia"

// console.log(x.toString().slice(0, 1).toUpperCase())


var x = "prince of persia"

function capFunction(x) {
    var splitStr = x.split(' ');

    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    console.log(splitStr.join(' '));
}

capFunction(x)

// function capitalizeFunction(x) {
//     console.log(x[i].split(' '))
//     for (i = 0; i < x.length; i++) {
//         console.log(x[i].charAt(0).toUpperCase() + split(1))
//     }
// }
// return x.join('')



// capitalizeFunction(x)

// exercise 16

x = "Web Development Tutorial"
var longest = 0

console.log(x.split(' '));


// additional function exercises

// exercise 19

var number1 = 5
var number2 = 2

function multiplicationFunction() {
    var multiplication = number1 * number2
    console.log(multiplication)
}

multiplicationFunction()

// exercise 20

var num1 = 2
var num2 = 8

function multFunction() {
    return num1 * num2;
}

console.log(multFunction())

// exercise 21

function anotherMultFuction(a, b) {
    var anotherMult = a * b;
    console.log(anotherMult)
}

anotherMultFuction(1, 3)

// exercise 22

function triangleType(a, b, c) {
    if (a === b && a === c && b === c) {
        console.log('Equilateral')
    } else if (a !== b && a !== c && b !== c) {
        console.log('Scalene');
    }
    else console.log('Isosceles')
}

triangleType(9, 1, 3)

// exercise 23 incomplete

var text = "Anything"

function replaceFunction(text) {
    for (var i = 0; i < text.length; i++) {
        var result = text.replace(/a/gi, 1);
        console.log(result)
    }

}

replaceFunction(text)