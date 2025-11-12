const accountID = 122131;
let accountEmail = "himanshu@google.com";
var accountPassword = "12345";
accountCity = "Bhopal";
let accountState;

// accountID = 2;

// console.log(accountID);
// const variable mai aap wapis assign nahi kar sakte hai, it will show error

console.table([accountID,accountEmail,accountPassword,accountCity]);

accountEmail = "himanshu@himanshu";
accountPassword = "142536";
accountCity = "Indore";

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);

/* var mai scope problem hota hai isliye hum let ko hu use karte hai */
// Prefer not to use var because of issue in block scope and functional scope