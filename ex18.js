// Exercise 18: Write a function named 'fibonacci' that takes a non-negative 
// integer 'n' and returns the 'n'th number in the Fibonacci sequence.
// Fibonacci sequence: The Fibonacci sequence is a series of numbers in which 
// each number (called a Fibonacci number) is the sum of the two preceding ones. 
// Typically, the sequence starts with 0 and 1. The sequence goes as follows:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function fibonacci(n) {
  // your code here
  let n1 = 0;
  let n2 = 1;
  let sumNumber = 0;


  for (let i = 0; i < n; i++) {

    n1 = n2;
    n2 = sumNumber;
    sumNumber = n1 + n2;

  }

  return sumNumber;
}

console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
