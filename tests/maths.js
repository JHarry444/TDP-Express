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

module.exports = {
  add, subtract, multiply, divide, reverseFactorial,
};
