let timeOfTheDay = (Math.round(Math.random() * 24));
const person = 'John';
const workingHours = [10, 11, 12, 13, 14, 15, 16, 17,];
const workingWeek = ['Monday', 'Tuesday', 'Wedesday', 'Thursday', 'Friday'];
const offWork = [19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8];
const commHome = 18;
const commWork = 9;
const placeOfWork = 'CodeNation! Manchester';
const homeTown = 'Leeds';
const week = ['Monday', 'Tuesday', 'Wedesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekEnd = ['Saturday', 'Sunday'];
let todayIs = week[~~(Math.random() * week.length)];


if (workingWeek.includes(todayIs) && workingHours.includes(timeOfTheDay)) {
   console.log(`Today is ${todayIs}, the current time is ${timeOfTheDay} hrs, ${person} is workin at ${placeOfWork}`); 
  } else if (workingWeek.includes(todayIs) && commWork == timeOfTheDay) {
   console.log(`Today is ${todayIs}, the current time is ${timeOfTheDay} hrs, ${person} driving to work`); 
  } else if (workingWeek.includes(todayIs) && commHome == timeOfTheDay) {
   console.log(`Today is ${todayIs}, the current time is ${timeOfTheDay} hrs, ${person} is finishing for the day soon and will be driving back home`); 

  } else {
  (workingWeek.includes(todayIs) && commWork == timeOfTheDay) 
   console.log(`Today is ${todayIs}, the current time is ${timeOfTheDay} hrs, ${person} is off work and relaxing at home`); 
  }    