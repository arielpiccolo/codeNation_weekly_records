let timeOfTheDay = (Math.round(Math.random() * 24));

const person = 'John';
const workingHours = [9, 10, 11, 12, 13 , 14, 15, 16, 17,];
const offWork = [18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6,7, 8]
let placeOfWork = 'Manchester';
let homeTown = 'Leeds';
const workingWeek = ['Monday', 'Tuesday', 'Wedesday', 'Thursday', 'Friday']
const weekEnd = ['Satuday', 'Sunday'];
let day = days[Math.floor(Math.random() * items.lenght)];

if (timeOfTheDay in offWork || weenEnd in day){
  console.log(`${person} is at home in ${homeTown}`);
}

