let day = 'monday'

 
let alarms = {
  weekEndAlarm: 'no needed to get up',
  weekDayAlarm: 'get up at 7:00'
}

function todayIs() {
  if (day === 'saturday' || day === 'sunday' ) {
    console.log(` today is ${day} ${alarms.weekEndAlarm}`);
  } else {
    console.log(` today is ${day} ${alarms.weekDayAlarm}`);
  } 
}

todayIs()




