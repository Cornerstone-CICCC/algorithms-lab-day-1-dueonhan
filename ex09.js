// Exercise 9: Write a function named 'flattenArray' that takes an array of nested arrays 
// and returns a single flattened array.

function flattenArray(arr) {
  // your code here
  let array = []
  /*
    for (let i = 0; i < arr.length; i++) {
      //console.log(arr[i])
      for (let j = 0; j < arr.length; j++) {
        console.log(arr[i][j])
        for (let k = 0; k < arr.length; k++) {
          if (arr[i][j][k] !== undefined) {
            array.push(arr[i][j][k])
          }
        }
      }
    }
  */
  arr.forEach(element => {
    array.push(element)
    console.log("element:" + element);
  });

  return array;
}

console.log(flattenArray([[1, 2], [3, 4], [5, [6, 7]]])) // [1, 2, 3, 4, 5, 6, 7]