const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) // ==> this gives array ke andar array
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
// ==> concat return the new array 

// console.log(all_heros);
// console.log(marvel_heros);
// console.log(dc_heros);

// ==> concat is not the best practise we use spread operator ...

const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,8,[4,2]],9]

const real_another_array = another_array.flat(Infinity)

// ==> Flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(real_another_array);

// ==> isArray is used to check if something is array or not
// console.log(Array.isArray("himanshu"));

// ==> from is used to convert into array
// console.log(Array.from("himanshu"));

// const abc = Array.from("himanshu")   |
// console.log(abc);                    | ==> iss case mai bhi run karta hai


// console.log(Array.from({name : "Himanshu"})) // *** Intresting case
// ==> returns the empty array untill unless we specify that we want for key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))