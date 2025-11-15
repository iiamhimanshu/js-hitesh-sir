// for of ===> array specific loop

// [{},{},{}]  ===> object inside array

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
    
}

const greetings = "Hello World!!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// ----------------------------- Maps ----------------------------


const map = new Map()
/* map ek object hai
   map key value pair mai data hold karta hai */

map.set("IN","India")
map.set("USA","United States of America")
map.set("FR","France")
map.set("IN","India")

// console.log(map);
// clearly we can see that india repeat nahi hua hai iska matlab ye hai ki map mai unique value rehti hai


for (const key of map) {
    // console.log(key);
    // this give output in form of array ex => ["IN","India"]
}

for (const [key,value] of map) {
    // console.log(key ," :- ", value);
    
}

const myObj  ={
    game1 : "NFS",
    game2 : "Spiderman"
}

for (const val of myObj) {
    // console.log(val);
    // says myObj is not iterable
}

for (const [key,val] of myObj) {
    // console.log(key,val);
    // says myObj is not iterable
}

for (const {key,value} of myObj) {
    // console.log(key,value);
    // says myObj is not iterable
}

