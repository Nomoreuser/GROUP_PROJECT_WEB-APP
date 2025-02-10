
// Function to show/hide the form container
function toggleContainer(id) {
    let formContainer = document.getElementById(id);
    formContainer.style.display = formContainer.style.display === "flex" ? "none" : "flex";
}

// Function to close the form
function toggleClose(id) {
    let formContainer = document.getElementById(id);
    formContainer.style.display = "none";
}

// Ensure the signup button switches views properly
document.getElementById("signup-Btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the link from refreshing the page
    document.getElementById("signin").style.display = "none"; 
    document.getElementById("signup").style.display = "block"; 
});

// Ensure the signin button switches views properly
document.querySelector(".toSignin").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.display = "block";
});



//Handle the users inputs for there email and pass 
document.getElementById("sign-up_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("sign-up_email").value;
    let password = document.getElementById("sign-up_password").value;

    if (!email || !password) {
        alert("Please fill in all fields!");
        return;
    }


    // Save user credentials to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if(email === savedEmail && password === savedPassword){
        alert("Already have it $^%");
        return;
    }


    alert("Sign Up Successful! Please Sign In.");
    // once done it automatically hide the sign up to see the sign in .
    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.display = "block";
});

document.getElementById("sign-in_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let enteredEmail = document.getElementById("sign-in_email").value;
    let enteredPassword = document.getElementById("sign-in_password").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        // go to my other html onces its true
        window.location.href = "/user/index.html";

        // Check if "Remember Me" is checked
        if (document.getElementById("remember_me").checked) {
            localStorage.setItem("rememberedUser", enteredEmail);
        } else {
            localStorage.removeItem("rememberedUser");
        }

    } else {
        alert("Invalid email or password! Please try again.");
    }
});

// Auto-fill email if "Remember Me" was checked
window.onload = function() {
    let rememberedUser = localStorage.getItem("rememberedUser");
    if (rememberedUser) {
        document.getElementById("sign-in_email").value = rememberedUser;
        document.getElementById("remember_me").checked = true;
    }
};

