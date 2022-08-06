function sinoTheWalker(input) {
  const [hours, minutes, seconds] = input[0].split(':');

  const date = new Date();
  date.setHours(Number(hours), Number(minutes), Number(seconds));

  const steps = Number(input[1]);
  const timePerStep = Number(input[2]);
  const totalSeconds = steps * timePerStep;

  date.setSeconds(date.getSeconds() + totalSeconds);

  let newHour = date.getHours();
  let newMinute = date.getMinutes();
  let newSecond = date.getSeconds();

  if (newHour < 10) newHour = '0' + newHour;
  if (newMinute < 10) newMinute = '0' + newMinute;
  if (newSecond < 10) newSecond = '0' + newSecond;

  console.log(`Time Arrival: ${newHour}:${newMinute}:${newSecond}`);
}

console.log('------------- Test 1 -------------');
sinoTheWalker([
  '12:30:30',
  '90',
  '1'
]);

// Time Arrival: 12:32:00

console.log('------------- Test 2 -------------');
sinoTheWalker([
  '23:49:13',
  '5424',
  '2'
]);

// Time Arrival: 02:50:01