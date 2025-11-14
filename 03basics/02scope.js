if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);       // ==> a scope se bahar hai
// console.log(b);       // ==> b bhi scope se bahar hai
// console.log(c);          // ==> c run kar raha hai matlab var ka scope global hai


function one(){
    const username = "Himanshu"

    function two(){
        const website = "Youtube"
        console.log(username);    
    }

    // console.log(website)
    two();
}

// one();

/* Andar waala function bahar ke variable ko access kar sakta hai lekin
   bahar wala function andar waale variable ko access nahi kar sakta hai
   jese ki chote bado se ice cream le sakte hai lekin bade choto se 
   ice cream nahi le sakte hai */
   
if(true){
    const username = "himanshu"
    if(username == "himanshu"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    // ==> website out of scope hai isliye undefined aa raha hai
}

// console.log(username);
// ==> username is out of scope isliye undefined aa raha hai



// +++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++

console.log(addOne(5))
// yaha pe hoisting hai isi wajah se ye line of code chal ja rahi hai

function addOne(num){
    return num + 1;
}
// console.log(addOne(5))

// console.log(addTwo(5))
// yaha function variable mai stored kar ke declare kia hai isliye hoisting nahi hai aur isi liye this line of code do not work
const addTwo = function(num){
    return num + 2;
}

// console.log(addTwo(5))