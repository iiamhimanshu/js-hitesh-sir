const mySymbol = Symbol("key1")
// ==> this is how a symbol data type is declared

// console.log(mySymbol);

const JsUser = {
    name : "Himanshu",
    "full_name": "Himanshu Tiwari",
    age : 23,
    location : "Bhopal",
    email : "himanshu@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday","Saturday"],
    [mySymbol] : "mykey1"
}

// 1st way of accessing
// console.log(JsUser.name , JsUser.age);

// ===>> 2nd way of accessing
// console.log(JsUser["email"]);
// *** this email behind the scene is treated like string 

/* JsUser.full_name ❌
   JsUser."full_name"❌
   JsUser["full_name"]✔ */

// console.log(JsUser["full_name"]);

// console.log(JsUser[mySymbol]); 

// JsUser.email = "himanshu@microsoft.com"
// console.log(JsUser.email);

// Object.freeze(JsUser)
// ==> after using this no changes can be made to the object
// JsUser.email = "himanshu@outlook.com"
// console.log(JsUser.email); // ===> cange do not happen

JsUser.greeting = function(){
    console.log("Hello everyone");    
};

/*  console.log(JsUser.greeting);
   this will give refernce to the function while 
   console.log(JsUser.greeting());
   ke case mai function run ho jaaye ga 
*/

console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`Hello everyone, my name is ${this.name}, my age is ${this.age}`);
    
}

JsUser.greeting2();