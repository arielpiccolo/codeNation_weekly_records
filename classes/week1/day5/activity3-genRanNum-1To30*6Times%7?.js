// set initial global variable to zero
let rounds = 0;
/*
//run a while loop that will generate 6 different random number and then 
//it will check it each number is divisible by 7 and logout the appropieted message
*/
while (rounds < 6) {
    let ranNum = (Math.floor(Math.random() * 30));
    rounds++;
    if (ranNum % 7 === 0) {
        console.log(`${ranNum} is divisible by 7`)
    } else {
        console.log(`${ranNum} it is not divisible by 7 `)
    }
}

