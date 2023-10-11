const numbers = [1, 2, 3, 4, 5];

const sumOfNumbers = (arr) => arr.reduce((total, num) => total + num, 0);

const result = sumOfNumbers(numbers);
console.log(result);
