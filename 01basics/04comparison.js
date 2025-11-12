// console.log (2 > 1)
// console.log (2 >= 1)
// console.log (2 < 1)
// console.log (2 <= 1)
// console.log (2 == 1)
// console.log (2 === 1)

console.log("2" > 1)               // true
console.log("02" > 1)              // true

console.log(null > 0);             // false
console.log(null == 0);            // false
console.log(null >= 0);            // true

// the reason is that an equality check == and comparison > >= < <= works differenty. Comparison convert null to a number, treating it as 0, thats why null >= 0  is true and null > 0 is false


// === is used to check strictly i.e it checks the data type and the value