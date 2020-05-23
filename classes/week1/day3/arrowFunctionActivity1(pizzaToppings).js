let orderCount = 0;

// arrow fuction that will collect "toppings inputs and update the orderCount variable"
const takeOrder = (topping) => {
    console.log(`Pizza with ${topping}`);
    orderCount ++;
}

takeOrder("pepperoni");
takeOrder("onions and olives");
takeOrder("peppers");

console.log(orderCount);

