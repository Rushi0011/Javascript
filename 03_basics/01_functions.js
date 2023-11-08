// console.log("R");
// console.log("U");
// console.log("S");
// console.log("H");
// console.log("I");


// function MyName(){
//     console.log("R");
//     console.log("U");
//     console.log("S");
//     console.log("H");
//     console.log("I");
    
// }

// MyName()

// function AddTwoNum(num1, num2)//num1,num2 are parameters
//  {
//     console.log(num1+ num2);
    
// }

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result=AddTwoNum(3,4)  //3,4 are arguments

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username)// username=== undefined
    {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rushi"))
// console.log(loginUserMessage("Rushi"))


//Objects and Arrays Part 2(Functions)

function calculateCartPrice(val1, val2, ...num1) {
    return num1
    
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Rushi",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

 // handleObject(user)

 handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));