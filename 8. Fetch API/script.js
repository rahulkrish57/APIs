
//1. .then()  .catch()
const apiUrl = "https://jsonplaceholder.typicode.com/users"

//fetch(apiUrl, {});

fetch(apiUrl, {
    method: "GET", // for using GET method we did not have to mention method: "GET", since it is default method
})
.then( function(response){

    if(response.status === 200) return response.json();
    else throw new Error("Error Occurred");   
})
.then(function(data) {
    console.log(data);
})
.catch(function (err) {
    console.log(err.message);
});

//2. try   catch -> async await

//const apiUrl = "https://jsonplaceholder.typicode.com/users"
async function fetchApi() {
   try{
    const response = await fetch(apiUrl); // default GET method so it is not mentioned
    if (response.status !== 200) throw new Error("Error Occurred"); 
    const data = await response.json();
    console.log(data);
    
   } catch (error) {
       console.log(error.message);
   }
}
fetchApi();
