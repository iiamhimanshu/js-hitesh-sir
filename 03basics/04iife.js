// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
/* koi bhi function jis ko immediately run karna ho
   for eg immediately database ko application se connect karna hai

   ===>> global scope ke pollution se problem hoti hai kayi baar toh 
        usse global scope ke variable ya pollution ko hatane ke liye
        IIFE use kia  */

// function chai(){
//     console.log("DB CONNECTED");    
// }
// chai();
// this think is not iife

(function chai(){
    console.log("DB CONNECTED"); 
})();
// ==>> this is iife and one more point you have to put seicolon at the end of iife function because it does not know ki context rok na kaha pe hai

(()=>{
    console.log("DB CONNECTED TWO");
    
})();

((name)=>{
    console.log(`Hey ${name}`);
})("himanshu")
// ==> this is argument passing in iife function