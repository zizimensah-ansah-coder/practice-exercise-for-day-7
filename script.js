

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