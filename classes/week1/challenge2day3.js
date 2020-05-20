let num = 9;

if (num % 3 === 0 || num % 5 === 5) {
    console.log(num);
} else {
    console.log("The number it is not divisible by 3 or 5")
} 


let cal = num % 3 == 0 || num % 5 == 0;

switch(cal) {
  case true:
    console.log(num);
    break 
  default:
    console.log("The number is not divisible by 3 or 5")
}