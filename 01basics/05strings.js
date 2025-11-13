const name = "Himanshu"
const repoCount = 50
// console.log(name + repoCount);
// traditional way 
console.log(`My name is ${name} and my repo count is ${repoCount}`)
// Modern way of writing 

const gameName = new String("hitesh-hc")
// when new keyword is used we use object in js
// kyuki ye object hai toh bohot saare methods aur prototype milte hai iske sath
// kyuki ye object hai toh key value pair mai exist kare ga
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);            
// => tells length of string
console.log(gameName.toUpperCase());     
// => convert string to uppercase
console.log(gameName.charAt(2));         
// => gives the character present at that index/key
console.log(gameName.indexOf('e'));  
// => gives the index/key for that character


const newString = gameName.substring(0,4);
console.log(newString);
// substring to not take negative value in as index as comparision to slice function

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  himanshu  "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim ka real case scenario ye hai ki jab aap website pe form bana rahe ho toh user knowing ya unknowing li white space daal deta hai toh usse hata ne ke liye hum trim usse karte hai, uss se starting aur ending ke unneccesray spaces hat jaate hai

const url = "https://himanshu.com/himanshu%20tiwari"
console.log(url.replace("%20","-"))
// replace simply replace kar deta hai
console.log(url.includes("verma"))
console.log(url.includes("tiwari"));
// includes simply true ya false return karta hai ki ye substring ki part of that string or not





