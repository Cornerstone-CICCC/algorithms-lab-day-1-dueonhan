// Exercise 6: Write a function named 'uniqueValues' that takes an array of values and 
// returns a new array with only unique values, removing duplicates.

function uniqueValues(arr) {
  // your code here

  const set = new Set(arr);
  const returnArr = [...set];

  return returnArr;
}



console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5]