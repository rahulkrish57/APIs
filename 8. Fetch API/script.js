
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

//--------------------------------------------------------------------------------------

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

//----------------------------- below code is from class -----------

var apiUrl = "https://restcountries.com/v2/all"
var fixerUrl = "http://data.fixer.io/api/latest?access_key=52812b188af07aae7e2b690586d5ed38"

// using normal function

/*
fetch(apiUrl)
    .then(function (response) {
       return response.json();
    })
    .then(function (data) {
        //console.log(data);
        var code = data[104].currencies[0].code;
        //console.log(code);
        return fetch(fixerUrl+"&symbols="+code)
        
    })
    .then(function (response1) {
        return response1.json();
    })
    .then(function (data1){
        console.log(data1);
    })
    .catch(function (error) {
        console.log(error);
    })
*/

// using arrow function
/*
   fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        var code = data[104].currencies[0].code;
        //console.log(code);
        return fetch(fixerUrl+"&symbols="+code)
        
    })
    .then((response1) =>response1.json())
    .then((data1) =>{
        console.log(data1);
    })
    .catch( (error) => console.log(error))
*/
    //async await

    async function foo(){
        try{
            var response = await fetch(apiUrl);
        var data = await response.json();
        var code =  data[104].currencies[0].code;
        //console.log(code);
        var response1 = await fetch(fixerUrl+"&symbols="+code);
        var data1 = await response1.json();
        console.log(data1);

        } catch{console.log(error.message)} 
    }
    
    foo();
