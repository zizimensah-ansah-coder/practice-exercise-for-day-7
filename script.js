//Creating a normalfunction
const square = function(square) {
    return (square(5));
};

//Arrow function of the normal function
const squares = number => number * number;
console.log(square(5));

// Second Normal function
let x = 5;
let y = 8;
const addNumber = function(numbers) {
    return x + y;
};

//Arrow fuction 
let x1 = 5;
let y1 = 8;
const addNumbers = numbers => x1 + y1;
console.log(x1 + y1);

//Greet function
const greet = function(greet) {
    return greet;
}
//Arrow function
const greets = greet => "Good morning!";
console.log(greet);

//Creating a promise
let p = new Promise((resolve,reject) => {
    let a = 1 + 3
    if(a == 2) {
        resolve("Success")
    }
    else{
        reject("Failed")
    }
})

p.then((message) => {
    console.log("This is in the then " + message)
}).catch((message)=> {
    console.log("This is in the catch "  + message)
})

//promise that resolves after two seconds
let pro= new  Promise((resolve) => {
    setTimeout(()  => {
        resolve("This promise will be resolved after two seconds");
    },2000);

});
pro.then((message) => {
    console.log( message);
});
//promise that rejects and handles error
let rejectPromise = new Promise((reject)  => {
    reject("Something went wrong");
});
rejectPromise.then((message)=> {
    console.log(message)
}).catch((error) => {
    console.error("Error: ", error);
});