const fullName = (fname, lname, age) => {
    console.log(`My name is ${fname} ${lname} I am ${age} year old and I am student at codeNation`)
  }
  
fullName('ariel' ,'piccolo', 45)
  

//converting function to arrow function

const factoral = (n) => {
  if ((n === 0) || (n == 1)) {
    return 1;
  } else {
    return (n * factoral(n-1));
  }
} 

console.log(factoral(33));


// arrow function
const sandwitchOrder = (top1, top2, top3, top4, top5) => {
  console.log(`we are preparing your sandwitch order 1 sandwitch with the following:${top1}, ${top2}, ${top3}, ${top4}, ${top5}`);
}

sandwitchOrder("ham","cheese","mayo","lattuce","mustard");