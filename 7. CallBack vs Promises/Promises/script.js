console.log("start");

console.log("mid");

function loginUser(email, password) {
    // hit backend
    const promise = new Promise (function (resolve, reject) {
        setTimeout(function () {
            resolve({username: "abc"})
        }, 2000)
    });

    return promise;
}

function getDetails(username) {
    // hit backend
    const promise = new Promise (function (resolve, reject) {
        setTimeout(function () {
            resolve({username, age: 25, likes: 100})
        }, 2000)
    });

    return promise;
}

function fetchPosts(username) {
    // hit backend
    const promise = new Promise (function (resolve, reject) {
        setTimeout(function () {
            resolve(["post 1", "post 2"])
        }, 2000)
    });

    return promise;
}

console.log("end");

loginUser("abc@gmail.com", "12345")
    .then(function(userObj) {
        console.log(userObj);
        return getDetails(userObj.username);
    })
    .then(function(userDetails){
        console.log(userDetails);
        return fetchPosts(userDetails.username);
    })
    .then(function(posts) {
        console.log(posts);
    })
        
/* output
start
mid
end
{username: 'abc'}
{username: 'abc', age: 25, likes: 100}
(2) ['post 1', 'post 2']
*/
