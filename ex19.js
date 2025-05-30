// Exercise 19: Write a function named 'flattenObject' that takes a nested object and 
// returns a new object with no nested properties.

function flattenObject(obj) {
  // your code here
  let newObj = {}
  let indent = ''


  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        console.log(`${indent}${key}:`);
        flattenObject(obj[key], indent + '  ');
      } else {
        console.log(`${indent}${key}: ${obj[key]}`);
      }
    }
  }

}

console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 })) // { 'a.b.c': 1, d: 2 }