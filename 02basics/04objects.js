// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = 123
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@somewhere.com",
    name : {
        userfullname : {
            firstname : "Crazy",
            lastname : "Person"
        }
    }
}

// console.log(regularUser.name);
// console.log(regularUser.name.userfullname);
// console.log(regularUser.name.userfullname.firstname);


const obj1 = { 1: "a" , 2 : "b"}
const obj2 = { 3: "c" , 4 : "d"}

// const obj3 = {obj1 , obj2}
// ==> iss case mai yehi problem hai jo array mai ho rahi thi, yaha par object ke andar object hai

/*const obj3 = Object.assign(obj1,obj2)
console.log(obj3);
console.log(obj1);

 yaha par obj1 one ko hi target maan ke ussi mai 2nd object merge kar dia hai issliye hum assign mai ek empty object bhi dete hai */

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj1);
// // ===> this works fine


const obj3 = { ...obj1 , ...obj2}
// => using spred opertor mostly we will use this
// console.log(obj3);

const user = [
    {
        id : 1,
        email : "h@mail.com"
    },
    {
        id : 2,
        email : "i@mail.com"
    },
    {
        id : 3,
        email : "j@mail.com"
    }
]

// console.log(user[1].email);
// ==> this works


// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// ==> this returns the output in array iss se hume bohot help hoti hai
//      we can traverse easily and can access data easily

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwnProperty("abc"))
// ==> Determines whether an object has a property with the specified name


// ------------------------- object destructor ----------------------------

const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstructor : "hitesh"
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course

// console.log(courseInstructor);
 
const {courseInstructor : instructor} = course
console.log(instructor);

