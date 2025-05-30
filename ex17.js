// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and 
// returns the string that appears the most frequently.

function mostFrequent(arr) {
  // your code here
  let result = {};
  let max = 0;
  let mostFrequent = "";

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (result[word]) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
  }

  for (key in result) {
    if (result[key] > max) {
      max = result[key];
      mostFrequent = key;
    }
  }
  
  return mostFrequent
}

console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])) // 'apple'