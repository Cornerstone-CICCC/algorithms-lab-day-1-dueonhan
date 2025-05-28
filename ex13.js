// Exercise 13: Write a function named 'findById' that takes an array of objects and an id, and returns the object with the matching id, or null if not found.

function findById(arr, id) {
  // your code here
  let array = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      array.push(arr[i])
    }
  }
  return array

}

console.log(findById([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }], 1)) // { id: 2, name: 'Jane' }