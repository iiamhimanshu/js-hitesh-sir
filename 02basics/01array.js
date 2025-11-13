// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

// myArr.push(6)
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(13));


const newArr = myArr.join()
// ==> join adds all element of an array in to the string

// console.log(myArr);
// console.log(typeof(myArr));
// console.log(newArr);
// console.log(typeof(newArr));

// ------------------------- SLICE AND SPLICE ---------------------------


console.log("A" , myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr)


// ==> slice original array mai change nahi karta hai , splice original array mai change karta hai ek point aur ki yaha hume ne dono slice aur splice ko 1 se 3 tak ki range di thi slice mai 3 include nahi rehta second tak gaya hai spice mai 3 include rehta hai 3 tak gaya hai



