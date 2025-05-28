// Exercise 20: Write a function named 'anagramGroups' that takes an array of strings and returns 
// an array of arrays, grouping anagrams together.

function anagramGroups(arr) {
  // your code here
  let result = [];
  let array = [];

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      array.push(arr[i]);

    } else {
      //console.log("*" + arr[i])
      array.push(arr[i]);
      result.push(array);
      arr = []
      // array.splice(i, 0, arr[i]);

    }
  }
  return result
}

console.log(anagramGroups(['bat', 'tab', 'cat', 'act'])) // [['bat', 'tab'], ['cat', 'act']]