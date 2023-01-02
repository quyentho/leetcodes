// given two numbers on the clock represent two hands on the clock
// how to calculate the degree between those two hands
// posi
const calculateDegreeGivenTwoHours = (position1, position2) => {
  // its take 5 minutes to move between two numbers on the clock
  const hourToMinuteConversionRate = 5;

  // 1 minute = 6 degree
  const minuteToDegreeConversionRate = 6;

  const rangeBetweenTwoNumbersInMinute = Math.abs(
    position1 * hourToMinuteConversionRate -
      position2 * hourToMinuteConversionRate
  );

  return rangeBetweenTwoNumbersInMinute * minuteToDegreeConversionRate;
};

const calculateDegreeGivenTwoMinutes = (minute1, minute2) => {
  return Math.abs(minute2 - minute1) * 6;
};

console.log(calculateDegreeGivenTwoHours(5, 2));
console.log(calculateDegreeGivenTwoHours(11, 6));
console.log(calculateDegreeGivenTwoHours(12, 6));

console.log(calculateDegreeGivenTwoMinutes(25, 10));
console.log(calculateDegreeGivenTwoMinutes(55, 30));
console.log(calculateDegreeGivenTwoMinutes(0, 30));
