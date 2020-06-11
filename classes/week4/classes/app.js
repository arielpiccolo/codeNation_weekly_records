class Contact {
    constructor(userName, theCity) {
        this.name = userName;
        this.city = theCity; // this.city is the key
        this.bankBalance = 15000;  // <- because is has already a value it does not need the constructor.
    }  



}

let contact1 = new Contact('George', 'liverpoll');


console.log(contact1.name);
console.log(contact1.city);
console.log(contact1.bankBalance);





/*

const contact1 = {
    name: 'ariel',
    city: 'york',
    hobbies: ['eat', 'drink', 'code'],   
    car: {
        make: 'ferrari',
        colour: 'blue'
    }
}

const contact2 = {
    name: 'tom',
    city: 'Manchester',
    hobbies: ['eat', 'drink', 'code'],   
    car: {
        make: 'ferrari',
        colour: 'red'
    }
}

*/