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

async function myFunc(){

    const userObj = await loginUser("abc@gmail.com", "12345")
    console.log(userObj);
    const userDetails = await getDetails(userObj.username)
    console.log(userDetails);
    const posts = await fetchPosts(userDetails.username);
    console.log(posts);
}

myFunc();


/* output
start
mid
end
{username: 'abc'}
{username: 'abc', age: 25, likes: 100}
(2) ['post 1', 'post 2']
*/