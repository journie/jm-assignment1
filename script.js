var users = [];

function generateString(){
    const result = Math.random().toString(36).substring(2,7);
    return result;
}

function populateUsersArray(){
    for(let i=0; i<100; i++){
       users.push({
        username: generateString(),
        age: Math.floor(Math.random() * 100),
        description: generateString(),
        profileImg: 'https://picsum.photos/100/100?random=' + i,
       })
    }
    return users;
}

function addTiles(users){
    for(let i=0; i<users.length; i++){
        const tileContainer = document.getElementById("tile-container");
        var currentUser = users[i];
        var newTile = document.createElement("div");
        newTile.className = 'tile';
        var username = document.createElement("p");
        username.appendChild(document.createTextNode("Username: " + currentUser.username));
        var age = document.createElement("p");
        age.appendChild(document.createTextNode("Age: " + currentUser.age));
        var description = document.createElement("p");
        description.appendChild(document.createTextNode("Description: " + currentUser.description));
        var img = document.createElement('img');
        img.src = currentUser.profileImg;
        newTile.append(img, username, age, description);
        tileContainer.appendChild(newTile);
    }
}

function toggleDark(){
    var body = document.body;
    body.classList.toggle("dark-mode");
}

function sortUsersByAge(){
    users.sort((a, b) => (a.age > b.age) ? 1 : -1);
    const tileContainer = document.getElementById("tile-container");
    tileContainer.innerHTML='';
    addTiles(users);
}

function sortUsersByName(){
    users.sort((a, b) => (a.username > b.username) ? 1 : -1);
    const tileContainer = document.getElementById("tile-container");
    tileContainer.innerHTML='';
    addTiles(users);
}

function sortUsers(){
    var select = document.getElementById("selector");
    if(select.value == "age"){
        sortUsersByAge();
    }
    if(select.value == "username"){
        sortUsersByName();
    }
}
window.onload = function(){
    populateUsersArray();
    addTiles(users);
}
