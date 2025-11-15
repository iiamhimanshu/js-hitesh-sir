const myObject = {
    js : "javaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // it prints all the key in the object
}

for (const key in myObject) {
    // console.log(`key is ${key} and value is ${myObject[key]}`);
    // it prints both key and value of the object    
}

const programming = ["cpp","c","java","js","python"]
 
for (const key in programming) {
    // console.log(key);
    // it give the keys of the array
}

/* for in loop se hume keys milti hai aur for of loop se direct values milti hai */

for (const key in programming) {
    // console.log(`${key} and ${programming[key]}`);
    // it give the keys and values of the array
}

const myObj  ={
    game1 : "NFS",
    game2 : "Spiderman"
}

