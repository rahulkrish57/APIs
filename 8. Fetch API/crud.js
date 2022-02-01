let url ="https://61f92a85783c1d0017c449c4.mockapi.io/user"

// GET
fetch(url)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

//POST

let data = {
    name: "rahul",
    email: "rahul@gmail.com",
    state: "TN",
    country: "IND",
};

fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "content-type": "application/json",
    },
})
.then((resp) => {
    if(resp.status >=200) {
        alert("data created");
    }
})
.then((data) => console.log(data))
.catch((err) => console.log(err))


//PUT

let data = {
    name: "person1",
    email: "person1@gmail.com",
    state: "TN",
    country: "IND",
};

fetch(url +'/1', {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
        "content-type": "application/json",
    },
})
.then((resp) => {
    if(resp.status >=200) {
        alert("data updated");    
    }
})
.then((data) => console.log(data))
.catch((err) => console.log(err));

// DELETE

fetch(url + '/1', {
    method: "DELETE",
})
.then((resp) => {
    console.log(resp)   
    }
)
.then((data) => console.log(data))
.catch((err) => console.log(err));
