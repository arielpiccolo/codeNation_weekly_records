//set variables
const pin = 1234;
let cashAvailable =100;
//function that will check pin code and the amount of money requested against cash available
const showMeTheMoney = (pinCode, withdraw) => {
    if (pinCode == pin && withdraw <= cashAvailable) {
        // if both requirements are meet, the new balance will be updated display to the customer      
        cashAvailable = cashAvailable -= withdraw  
        console.log(`transaction succesfull,please take your ${withdraw} pounds. Your New account balance is now ${cashAvailable}`)
       // if condision are not meet the floowing message will be desplayed.
    } else {
        console.log('There are no suficiants founds to cover this request')
    }
}

showMeTheMoney(1234, 50);