const user = {
    username : "himanshu",
    price : 999,
    welcomeMessage : function(){
        console.log(`Hey ${this.username}, welcome to the website`);
        // jab bhi aap ko current context ko refer karna hai toh aap this use kare ge
        // console.log(this) ==> ue this iss case username, price,welcomeMessage ye sab dega 
    }
}

// user.welcomeMessage()
// user.username = "Vansh"
// user.welcomeMessage()

// console.log(this);
// ==> current context aap ko empty object mile ga in node enviornment mai
// ==> this ko jab aap browser mai dekhte hai toh contrxt mai window milta hai 

function chai(){
    const username = "himanshu"
    // console.log(this.username); ==> ye undefined deta hai
    // console.log(this); ===> ye pata nahi kya kya deta hai bohot kuch deta hai
    
}

// chai();

const chai2 = function(){
    let username = "himanshu"
    // console.log(this.username);
    // ye bhi undefined hi dega
}

chai2()

// +++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++

const chai3 = ()=>{
    let username = "Omkar"
    console.log(this.username);   
    // ===> ye bhi undefined hi dega
}

// chai3()

const addTwo = (num1,num2) => {
        return (num1 + num2);
}
// this was basic arrow function
// console.log(addTwo(37,97));

/* explicitly return jab hota hai jab hume return keyword use karna padhe 
   implicite return wo hota hai jab hum return keyword use kiye bina hi return kar de */

const minusTwo = (num1,num2) => num1 - num2
// console.log(minusTwo(8,2));

const multiTwo = (num1,num2) => (num1*num2)
// console.log(multiTwo(4,5));

const obj = (a,b) => ({username : "himanshu"})
// console.log(obj(1,2));
/* jab object return karana hotoh paranthesis use kare ge in case of singal line */


