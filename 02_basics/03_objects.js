//singleton:if we build like lterals it does not make singleton
//AND  If we use constructor it make singleton


//Objects literals

object.creat // using constructor method


const mySym = Symbol("key1")

const JsUSer ={
    name:"Rushikesh",
    age: 21,
    [mySym]: "mykey1",//to add symbol into object as key and print it
    location:"Pune",
    email :"Rushi@google.com",
    isloggedin :False,
    lastLoginDays: ["Mon","tue"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rushikesh@chatgpt.com"
// Object.freeze(JsUser)// to lock the object that make object constant changes does not propogate.

JsUser.email = "rushikesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());