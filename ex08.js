// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  // your code here
  arr = text.split(" ")
  let longestWrod = "";


  for (let i = 0; i < arr.length; i++) {

    for (let j = 1; j < arr.length; j++) {

      if (arr[i].length < arr[j].length) {
        longestWrod = arr[j]
      }
    }
  }

  return longestWrod;
}

console.log(longestWord('The duck loves bananas and grapes')) // 'bananas'
