//if  statement
const isUserLoggedin =true
const temperature=41
// if (temperature<50) 
//     {
//         console.log("less than 50");   
// }else{
//     console.log("greater than 50");
// }
// if (2 =="2") {
//     console.log("executed");
// }


// const score=200
// if (score=>200) {
//     const power="fly"
//     console.log("User power:${power}");
// }


// const balance = 1000

// // if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//    console.log("less than 1200");

// }
const UserLoggedin= true
const debitcard =true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedin && debitcard && 2==2){
    console.log("Allow you to buy this course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in");
}