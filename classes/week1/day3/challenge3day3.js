// a random number is generated and stored 
let num = (Math.floor(Math.random() * 100));

// the variable is then tested agaist all possible outcomes
if (num % 3 == 0 && num % 5 == 0) {
  console.log(`the number ${num} says Fizz Buzz!`); 
} else if (num % 3 == 0) {
  console.log(`the nunmber ${num} says Fizz!`);
} else if ( num % 5 == 0) {
  console.log(`the number ${num} says Buzz!`);
} else {
  console.log(`the number ${num} number is not divisible by 3 and by 5`);
}