
console.log("start");

console.log("mid");

function userInput(emailID, password) {
    // hits backend...

    setTimeout(function () {
        console.log("setTimeout working");
        return { username: "abc"}
    }, 5000)
}

console.log("end");

const userObj = userInput("abc@gmail.com", "12345"); 
console.log(userObj);

/*output:
script.js:2 start
script.js:4 mid
script.js:15 end
script.js:18 undefined --> it shows undefined because we cannot acces the return statement inside SetTimeout
script.js:10 setTimeout working
*/


//==========================================================================================================================


console.log("start");

console.log("mid");

function loginUser(emailID, password, callback) {
    // hits backend...

    setTimeout(function () {
        console.log("setTimeout working");
        callback({ username: "abc"});
    }, 5000)
}
console.log("end");

loginUser("abc@gmail.com", "12345", function(userObj){
    console.log(userObj);
})

/*output:
script.js:27 start
script.js:29 mid
script.js:40 end
script.js:35 setTimeout working
script.js:43 {username: 'abc'}
*/


//=============================================================================================================


console.log("start");

console.log("mid");

function loginUser(emailID, password, callback) {
    // hits backend...

    setTimeout(function () {
        console.log("setTimeout working");
        callback({ username: "abc"});
    }, 5000)
}
function getUserDetails(username, callback) {
     // hits backend...
    setTimeout(function () {
        console.log("setTimeout2 working");
        callback({username, age: 25, likes: 100}) // here username: username is written as just username since key value is of same
    }, 2000)
}
console.log("end");

loginUser("abc@gmail.com", "12345", function(userObj){
    console.log(userObj);

    getUserDetails(userObj.username, function(data){
        console.log(data);
    })
})

/*output:
start
mid
end
setTimeout working
{username: 'abc'}
setTimeout2 working
{username: 'abc', age: 25, likes: 100}
*/

//=============================================================================================================


console.log("start");

console.log("mid");

function loginUser(emailID, password, callback) {
    // hits backend...

    setTimeout(function () {
        console.log("setTimeout working");
        callback({ username: "abc"});
    }, 5000)
}
function getUserDetails(username, callback) {
     // hits backend...
    setTimeout(function () {
        console.log("setTimeout2 working");
        callback({username, age: 25, likes: 100}) // here username: username is written as just username since key value is of same
    }, 2000)
}

function fetchDetails(username, callback) {
    //// hits backend...
    setTimeout(function () {
        console.log("setTimeout3 working");
        callback(['post1', 'post2']);
    }, 2000)
}

console.log("end");

loginUser("abc@gmail.com", "12345", function(userObj){
    console.log(userObj);

    getUserDetails(userObj.username, function(data){
        console.log(data);

        fetchDetails(data.username, function(posts){
            console.log(posts);
        })
    })
})