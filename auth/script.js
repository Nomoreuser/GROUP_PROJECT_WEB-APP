
let formContainer = document.getElementById("form-container");

let loginUsername = document.getElementById("loginUsername");
let loginPassword = document.getElementById("loginPassword");

let signupUsername = document.getElementById("signupUsername");
let signupPassword = document.getElementById("signupPassword");

// Function to show the form-container
function toForm(){
    formContainer.style.display = "block";
}

// Function to close the form-container
function closeForm() {
    formContainer.style.display = "none";
}

// show sign up .. hiding log in 
document.getElementById("toSignup").addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("signin").style.display = "none"; 
    document.getElementById("signup").style.display = "block"; 
});

// show log in .. hide sign up
document.getElementById("toLogin").addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.display = "block";
});


function clearInput(username,password){
    username.value="";
    password.value=""
}

// Sign up Form save user input to use it in log in
document.getElementById("Sign-up").addEventListener('submit', function(event) {
    event.preventDefault();

    let username = signupUsername.value;
    let password = signupPassword.value;
    
    //get the stored input
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existing = users.find(user => user.username === username);
    if(existing){
        alert("Username already exists");
        clearInput(signupUsername,signupPassword);

        document.getElementById("signup").style.display = "none";
        document.getElementById("signin").style.display = "block";
        return;
    }

    users.push({username,password});
    localStorage.setItem("users", JSON.stringify(users));

    clearInput(signupUsername,signupPassword);
   
    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.display = "block";
});


//log in form checking if input equal in stored before direct in dashboard
document.getElementById("Log-in").addEventListener('submit', function(event) {
    event.preventDefault();

    let username = loginUsername.value;
    let password = loginPassword.value;

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    let check = storedUsers.find(user => user.username === username && user.password === password);
    if(check){
        // to rename the username in my user dashboard;
        localStorage.setItem("username",check.username);
        window.location.href="/Working/index.html";
    }else {
        alert("No account or Wrong Username or Password");
    };

    clearInput(loginUsername,loginPassword);
});
