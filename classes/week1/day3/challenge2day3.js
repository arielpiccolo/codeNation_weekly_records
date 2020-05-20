let num = (Math.floor(Math.random() * 100));

if (num % 3 === 0 || num % 5 === 5){
    
    console.log('\noutput using if/else statements');
    console.log(`the number ${num} is divisible by 3 and also by 5!\n`);
    
} else {
    console.log('\noutput using if/else statements');
    console.log(`The number ${num} it is not divisible by either 3 or by 5\n`)
} 


let cal = num % 3 == 0 || num % 5 == 0;

switch(cal) {
    case true:
    console.log('--------------------------------\n')
    console.log('output using switch statements');
    console.log(`the number ${num} is divisible by 3 and also by 5!\n`);
    break 
  default:
    console.log('--------------------------------\n')
    console.log('output using switch statements');
    console.log(`The number ${num} it is not divisible by either 3 or by 5\n`);
}