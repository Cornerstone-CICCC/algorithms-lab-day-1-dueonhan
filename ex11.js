// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
  // your code here
  let array = text.split("")
  //console.log("array:" + array)
  let words = ""
  for (let i = array.length; i >= 0; i--) {
    //console.log("array:" + array[i]);
    words += array[i]
  }
  return words;
}

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'