// Exercise 14: Write a function named 'mergeArrays' that takes two arrays and returns 
// a new array that combines the elements of both arrays, alternating between them.

function mergeArrays(arr1, arr2) {
  // your code here
  let array = []
  for (let i = 0; i < arr1.length; i++) {
    array.push(arr1[i])
  }

  for (let j = 0; j < arr2.length; j++) {
    array.push(arr2[j])
  }
  //array.sort

  return array.sort();
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]