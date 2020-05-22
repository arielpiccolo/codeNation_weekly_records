// playing with arrays

//lets create an array

let fruits = [
    'bananas', 2,
    'strawberries', 3,
    'apples', 2,
    'grapes', 3,
    'pears', 3,
    'oranges', 4,
    'mangos', 5,
    'kiwi', 2
];



//lets reverse our fruit list
console.log(fruits.reverse())


//check the index of a known array element
console.log(fruits.indexOf('oranges'));



//check for specific elements inside our array
if (fruits.includes('mangos')) {
    console.log('Yes there are mangos in our array');
} else {
    console.log("No,there are not mangos in our array");
}
if (fruits.includes('coconut')) {
    console.log("Yes there are coconuts in out array");
} else {
    console.log("No,there are not coconuts in our array");
}


//lets join all the element into one long single string
let newFruitsArray = fruits.join("");
console.log(newFruitsArray);

console.log(fruits[0]);

fruits.shift('annana');

console.log(fruits);
