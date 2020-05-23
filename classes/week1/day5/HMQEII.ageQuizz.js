
console.log("Hello world from js file");


let question = prompt('What is your name: ?')

console.log(`my name is ${question}`);

alert(`my name is ${question}`)



let question = "How old is Queen Elizabeth II, is she: ";

let choices = ['87', '90', '92', '94', '95'];

let correctAnswer = false;

while( correctAnswer == false ) {

    resutls = prompt(`${question} ${choices[0]} ${choices[1]} ${choices[2]} ${choices[3]}`);
    if (resutls == choices[3]) {
        alert("that is correct! well done");
        correctAnswer = true
    } else {
        alert("sorry that is incorrect, try again?"); 
    }

}

/*

let fName = "Ariel";
let lName = "Piccolo";

//jquerry test drive

*/