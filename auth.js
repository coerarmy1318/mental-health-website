let signupMode = false;

function toggleForm(){

signupMode = !signupMode;

let title = document.getElementById("formTitle");
let button = document.querySelector(".auth-box button");
let switchText = document.querySelector(".switch");

if(signupMode){

title.innerText = "Sign Up";
button.innerText = "Create Account";
button.setAttribute("onclick","signup()");
switchText.innerText = "Already have an account? Login";

}
else{

title.innerText = "Login";
button.innerText = "Login";
button.setAttribute("onclick","login()");
switchText.innerText = "Don't have an account? Sign up";

}

}

function signup(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

let users =
JSON.parse(localStorage.getItem("users")) || {};

users[username] = password;

localStorage.setItem("users",JSON.stringify(users));

alert("Account created!");

toggleForm();

}

function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

let users =
JSON.parse(localStorage.getItem("users")) || {};

if(users[username] === password){

localStorage.setItem("loggedUser",username);

window.location.href="dashboard.html";

}
else{

alert("Invalid login");

}

}