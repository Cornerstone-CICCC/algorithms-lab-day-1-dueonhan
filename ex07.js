// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

  }
  return sum / arr.length;
  // your code here
}

console.log(calculateAverage([10, 20, 30, 40, 50, 60])) // 30