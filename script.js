/* tile object

180px w
170px h*/

/*user:
profile image
username
age
description*/

//randomly generate user info profile image: picsum.photos

// class User {
//     constructor(username, age, description, profileImg){
//         this.username = username;
//         this.age = age;
//         this.description = description;
//         this.profileImg = profileImg;
//     }
// }


var users = [];

function generateString(){
    const result = Math.random().toString(36).substring(2,7);
    return result;
}

function populateUsersArray(){
    for(let i=0; i<100; i++){
       users.push({
        username: generateString(),
        age: Math.random(),
        description: generateString(),
        profileImg: 'https://picsum.photos/120/120?random=' + i,
       })
    }
    console.log(users);
    return users;
}

function addTiles(users){
    for(let i=0; i<users.length; i++){
        var currentUser = users[i];
        var newTile = document.createElement("div");
        newTile.className = 'tile';
        var username = document.createElement("p");
        username.appendChild(document.createTextNode(currentUser.username));
        var age = document.createElement("p");
        age.appendChild(document.createTextNode(currentUser.age));
        var description = document.createElement("p");
        description.appendChild(document.createTextNode(currentUser.description));
        var img = document.createElement('img');
        img.src = currentUser.profileImg;
        newTile.append(img, username, age, description);
        document.body.appendChild(newTile);
    }
}

window.onload = function(){
    populateUsersArray();
    addTiles(users);
}
