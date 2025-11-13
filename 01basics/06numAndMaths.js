const score = 400
// console.log(score);

const balance = new Number(100)
// jab hum iss tarike se declare karte hai number ko phir fixed ho jaata hai ki uska datatype number hi hai

// console.log(balance);
// console.log(balance.toString.length);
// console.log(balance.toFixed(2))
// fixed is use ki decimal ke baad ke points tak ans chahiye ise hum ecommerce website wagera mai use karte hai ya kare ge

const anotherNumber = 123.865
// console.log(anotherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++

// console.log(Math)

// ==> math library js mai by default include rehti hai to do mathmatical operation

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(7.2));
// console.log(Math.floor(7.2));
// console.log(Math.min(0,1,5,8,9,-5,4,3,));
// console.log(Math.max(4,9,11,2));
// console.log(Math.random());


const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max-min) + 1) + min))

