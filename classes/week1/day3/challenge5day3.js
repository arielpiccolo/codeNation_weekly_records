let timeOfTheDay = (Math.round(Math.random() * '24'));
const person = 'John';
const workingHours = ['9', '10','11', '12', '13' , '14', '15', '16', '17'];
const offWork = ['19', '20', '21', '22', '23', '24', '1', '2', '3', '4', '5', '6', '7'];
const commHome = 17;
const commWork = 8;
let placeOfWork = 'CodeNation! Manchester';
let homeTown = 'Leeds';
const week = ['Monday', 'Tuesday', 'Wedesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let todayIs = week[~~(Math.random() * week.length)];

let workingWeek = ['Monday', 'Tuesday', 'Wedesday', 'Thursday', 'Friday']
let weekEnd = ['Saturday', 'Sundat'];

if (workingWeek.includes(todayIs) && timeOfTheDay in workingHours) {
   console.log(`Today is ${todayIs}, the current time is ${timeOfTheDay} hrs, and ${person} is workin at ${placeOfWork}`); 
} else if (workingWeek.includes(todayIs) && timeOfTheDay == 8) {
  console.log(`Today is ${todayIs}, the current time is ${timeOfTheDay} hrs, and ${person} is commuting to work`);
} else if (workingWeek.includes(todayIs) && timeOfTheDay == 17) {
  console.log(`Today is ${todayIs}, the current time is ${timeOfTheDay} hrs, and ${person} is commuting back Home`);
} else {
  console.log(`Today is ${todayIs}, the current time is ${timeOfTheDay} hrs, and ${person} is off work and relaxing at home in ${homeTown}`)
}

