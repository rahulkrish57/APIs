/*
 XMLHttpRequest

 0 - Unsend
 1 - Open
 2 - Header received
 ** Error** if prob arises on above state
 3 - Loading
 4 - Done

 Things to remember in XMLreq
    1. Status
    2. response
    3. readyState
    4. onreadystatechange
*/

const url = "https://jsonplaceholder.typicode.com/photos";

const xhr = new XMLHttpRequest();
 console.log(xhr);

 const contentContainer = document.querySelector(".contentContainer");
 function showUser(data) {
     for( i = 0; i < data.length; i++){
        const newElement = document.createElement("h3");
        newElement.textContent = `${i + 1} - ${data[i].title}`;
        contentContainer.append(newElement);
     }
 }
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            const photoArr = JSON.parse(xhr.response); // here response will be in string format so we parse into array for access
            //console.log(photoArr);
            showUser(photoArr);
        } else console.log("ERROR!")
    }
};

xhr.open("GET", url);
xhr.send();

