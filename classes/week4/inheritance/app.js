// js classes Inheritance



//  MAIN CLASS
class Player {
    constructor(name, age) {   //   <-- Inheritance - every 'player' creater by this construture will Inheritance this parameters
        this.userName = name;
        this.userAge = age;             // <---- always grab details from the (.this)  like player.this

    }

    run() {
        console.log("I am running");
    }
}









//create a new entry player1 using the player constructor
const player1 = new Player('steer;ing, 24');


// running the fuction inside the classs Player
player1.run();



















//SUB CLASSES----------------

// creating a class using the 'super' function to Inheritance all parameters from class player
class GolfPlayer extends Player {
    constructor(name, age, country){
        super(name, age);
        this.playerNatioality = country;
    }
}





//creating a new entry using the Inheritance parameters
let player2 = new GolfPlayer('Tiger Wood', 40, 'USA');






console.log(player2.userName);

player2.run();

















// if you create a new parameters the second class this constructor parameter wont be available in the parent classs



class FootballPlayer extends Player {
    constructor(name, age, income) {
        super(name, age)      // <-- use super to copy all the .this entries in the class parent
        this.playerSalary = income;
    }   
}

let player3 = new FootballPlayer('Ronaldo', 34, 1000); 
player3.run()

player3.income;
player3.playerSalary;


