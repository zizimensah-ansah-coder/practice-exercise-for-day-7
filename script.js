//using asyns and await
function getUser() {
    return new Promise((resolve, reject) => {
        
            resolve("The data was downloaded")
        });
    
};
getUser().then((message) => {
    console.log(message);
}).catch((error)  => {
    console.error("Error: " ,error);
});
//using async and wait 
async function loadUser() {
    try{
        const message = await getUser();
        console.log(message);
    }
    catch(error) {
        console.error(error)
    }
    }
    