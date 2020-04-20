let database = [
    {
        username: "Susanne",
        password: "supersecret"
    },
    {
        username: "Mark",
        password: "secretive"
    }
];

let newsfeed = [
    {
        author: "Mark",
        title: "This is Mark's title",
        summary: "This is the summary of Mark's news entry."
    },
    {
        author: "Hussam",
        title: "This is Hussams's title",
        summary: "This is the summary of Hussam's news entry."
    },
    {
        author: "Andrina",
        title: "This is Andrina's title",
        summary: "This is the summary of Andrina's news entry."
    }
];

//let username = prompt("What is your user name?");
//let password = prompt("What is your password?");
//SignIn(username, password);


function SignIn(user, pass) {
    if (IsUserValid(user, pass)) {
        console.log(newsfeed);  
    } else {
        alert("your details are not valid !");
    }
}


function IsUserValid(user, pass) {
    for(let i = 0; i < database.length; i++){
    }
    if (user === database[i].username && pass === database[i].password) {
        return true;
} else
    console.log("your details are not valid !");
};

let counter = 0;
while(counter < 10){
    console.log(counter);
    counter++;
}

counter = 10;
do{
    console.log(counter);
    counter--;
}    while(counter > 0)
for(let counter = 10; counter > 0; counter--){
    console.log(counter);
}