let timeOfTheDay = (Math.round(Math.random() * 24));

const person = 'John';
const workingHours = [9, 10, 11, 12, 13 , 14, 15, 16, 17,];
const offWork = [18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8];
let placeOfWork = 'CodeNation! Manchester';
let homeTown = 'Leeds';
const week = 'Monday, Tuesday, Wedesday, Thursday, Friday, Saturday, Sunday';
let todayIs = week[Math.floor(Math.random()*week.length)];
let weekEnd = todayIs.search("Saturday, Sunday");


if (timeOfTheDay in offWork || weekEnd == true ){
  console.log(`\n${person} is at home in ${homeTown}`);
} else {
  console.log(`\n${person} is at work at ${placeOfWork}`)
}

