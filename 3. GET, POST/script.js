// GET and POST

const apiUrl = "https://api.codewithguruji.com/randompost";

const postContainer = document.getElementById("postContainer");
const inputBox = document.getElementById("inputBox");
const postButton = document.getElementById("postBtn");


/* example of how data will be in apiURL
[
    { _id: "12345jdfhiuseyr57", post: "New Post Also" },
    { _id: "12345jdfhiuseyr58", post: "New Post Also" }
]
*/


function createElement(textValue, postID) {
        const postText = document.createElement("h3");
        postText.setAttribute("id", postID)
        postText.textContent = textValue;
        postContainer.append(postText); 
}
//GET
function fetchPosts() {
    const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if( xhr.status === 200){
        const postArr = JSON.parse(xhr.response);
        for (data of postArr) {
            createElement(data.post, data._id);
        } 
    } else console.log("ERROR!")
}
xhr.open("GET", apiUrl);
xhr.send();
}
fetchPosts();

//POST
function newPost() {
    const object = {post: inputBox.value}
    const jsonString = JSON.stringify(object); // it has to be json string 
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if( xhr.status === 200){
            const object = JSON.parse(xhr.response);
            createElement(object.post, object._id);
        } else console.log("ERROR!")
    }
    
    xhr.open("POST", apiUrl);
    xhr.setRequestHeader("content-Type", "application/json") // says to backend the header we send is of json type orelse it will show 400 error.
    xhr.send(jsonString);
}

