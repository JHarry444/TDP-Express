const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const reverseFactorial = (num) => {
  let i = 1;
  let n = num;
  while (n > 1) {
    i += 1;
    n /= i;
  }
  if (n === 1) return `${i}!`;
  return 'NONE';
};

const doggoCompetition = (place) => {
  const places = [];
  for (let i = 1; i <= 100; i++) {
    if (i === place) continue;
    const digit = i % 10;
    if (digit === 1 && i !== 11) places.push(`${i}st`);
    else if (digit === 2 && i !== 12) places.push(`${i}nd`);
    else if (digit === 3 && i !== 13) places.push(`${i}rd`);
    else places.push(`${i}th`);
  }
  return places;
};

module.exports = {
  add, subtract, multiply, divide, reverseFactorial, doggoCompetition,
};
