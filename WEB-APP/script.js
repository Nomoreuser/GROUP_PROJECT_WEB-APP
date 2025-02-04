
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
