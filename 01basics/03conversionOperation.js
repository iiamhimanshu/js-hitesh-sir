let score = "33"
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));
console.log(valueInNumber);

let score1 = "33abc"
console.log(typeof(score1));
let valueInNumber1 = Number(score1)

console.log(typeof(valueInNumber1));
console.log(valueInNumber1);

// "33" => 33
// "33abc" => Nan
// true => 1, false => 0

let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn)
// -1,1,2,10 => true , 0 => false

let isLoggedIn1 = ""
let booleanisLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanisLoggedIn1)

// "" => false , "himanshu" => true
