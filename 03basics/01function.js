function sayMyName (){
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName ==> this will give reference

// sayMyName()
// => this will do execution of the function
 
function addTwoNumber (number1 , number2){
    console.log(number1 + number2)
}

// addTwoNumber(5,8)
// addTwoNumber(5,"a")
// addTwoNumber("c",9)
// addTwoNumber("Himanshu","Tiwari")
// addTwoNumber(NaN,null)             // Nan
// addTwoNumber(true,null)            // 1
// addTwoNumber(true,false)           // 1

function loginUserMessage(name){
    console.log(`hey ${name}, welcome!!!`)
}

// loginUserMessage("himanshu")
// loginUserMessage(2)


/* aesi situation aaye jab aap ko malum nahi ki kitne argument aane
   waaale toh hume uss hisab se parameter taiyaar karne padhe ge
   example shopping cart */

function calculateCartPrice(... num1){
       console.log(num1)
}

// => ... hi rest aur spread opreator hai in this case it is ued as rest operator

// calculateCartPrice(500,22,100,345,999)

function calculateCartPrice2 (val1,val2,...num){
    console.log(num)
}

// calculateCartPrice2(50,80,70,90,5555,6666,1111)

const user = {
    username : "himanshu",
    price : 999,
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
// handleObject({
//     username : "Sammy",
//     price : 399
// })

function handleMyArray (getArray){
    console.log(getArray[2])
}

const arr1 = [100,200,400,600,900]
// handleMyArray(arr1)
// handleMyArray([10,20])