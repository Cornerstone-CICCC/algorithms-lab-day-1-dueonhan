// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns 
// an object with the count of each string in the array.

function countOccurrences(arr) {
  // your code here
  let obj = {}
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    //obj.arr[i]
    for (let j = 1; j < arr.length; j++) {
      console.log(`arr[i] ${arr[i]} +`)
      if (arr[i] === arr[j]) {
        count += 1;
        obj.obj[key] = key;

      }
    }
    console.log(arr[i]);
    console.log(count);
    console.log(obj);
    //const obj = { name: "Ben" };
    //obj.age = 22;



    //console.log(arr[i])

  }
  console.log(obj)

}
//obj.key3 = "value3";
console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }