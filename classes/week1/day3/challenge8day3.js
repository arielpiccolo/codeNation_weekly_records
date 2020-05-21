//create variables that will store 2 random numbers
let num1 = (Math.floor(Math.random() * 10));
let num2 = (Math.floor(Math.random() * 10));
let sum = num1 + num2;

//check for either even or odd number
if (sum % 2 == 0) {
    console.log(`${sum} is the sum of num1 + num2 and gives an even number`)
} else {
    console.log('num1 * num2 gives' + ' ' + num1 * num2);
}