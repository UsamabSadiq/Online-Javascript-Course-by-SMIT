// ****** QUESTION 1 ******//
// Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let number1 = +prompt('Enter any Number')
console.log('Number 1: ' + number1);

let number2 = +prompt('Enter any Number')
console.log('Number 2: ' + number2);

if (number1 > number2) {
    console.log('Number: (' + number1 + ') is greater than Number: (' + number2 + ')');
} else {
    console.log('Number: (' + number2 + ') is greater than Number: (' + number1 + ')');
}
// QUESTION 1 ENDS

// ******  QUESTION 2 ******//
// Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

let num = prompt('Enter any number')
console.log('num: ' + num);
if (num[0] === '-') {
    console.log('The sign is: ' + num[0]);
} else {
    console.log('The sign is: + ');
}
// QUESTION 2 ENDS

// ******  QUESTION 3 ******//
// Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

var num1 = +prompt('Enter any number')
var num2 = +prompt('Enter any number')
var num3 = +prompt('Enter any number')
var num4 = +prompt('Enter any number')
var num5 = +prompt('Enter any number')

var largestNumber = Math.max(num1, num2, num3, num4, num5)
console.log('largest Number: ' + largestNumber);
// QUESTION 3 ENDS

// ******  QUESTION 4 ******//
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

for (let i = 0; i <= 15; i++) {
    // console.log(i);
    if (i === 0) {
        console.log('Number is Even: ' + i);
    } else if (i % 2 === 0) {
        console.log('Number is Even: ' + i);
    } else {
        console.log('Number is Odd: ' + i);
    }
}
// QUESTION 4 ENDS

// ******  QUESTION 5 ******//
// Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade

let subj1 = +prompt('Enter Marks')
let subj2 = +prompt('Enter Marks')
let subj3 = +prompt('Enter Marks')
let subj4 = +prompt('Enter Marks')
let subj5 = +prompt('Enter Marks')

let avgMarks = ((subj1 + subj2 + subj3 + subj4 + subj5) / 5).toFixed()
console.log('Average Marks: ' + avgMarks)
if (avgMarks < 100 && avgMarks >= 90) {
    console.log('Grade is: A');
} else if (avgMarks < 90 && avgMarks >= 80) {
    console.log('Grade is: B');
} else if (avgMarks < 80 && avgMarks >= 70) {
    console.log('Grade is: C');
} else if (avgMarks < 70 && avgMarks >= 60) {
    console.log('Grade is: D');
} else if (avgMarks < 60) {
    console.log('Grade is: F');
} else {
    console.log('Better Luck Next Time, Work hard!!');
}
// QUESTION 5 ENDS

// ******  QUESTION 6 ******//
// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz ' + i);
    } else if (i % 5 === 0) {
        console.log('Buzz ' + i);
    } else if (i % 3 === 0) {
        console.log('Fizz ' + i);
    } else {
        console.log('Not A Factor of 3 & 5: ' + i);
    }
}
// QUESTION 6 ENDS

// ******  QUESTION 7 ******//
// Write a JavaScript program to construct the following pattern, using a nested
// for loop.

var star;
for (x = 1; x <= 6; x++) {
    for (y = 1; y < x; y++) {
        star = star + ("*");
    }
    console.log(star);
    star = '';
}

// QUESTION 7 ENDS
