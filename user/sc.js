
function toEdit(id){
    let a = document.getElementById(id);
    a.style.display = a.style.display === "flex" ? "none" : "flex";
}

function toExit(id){
    let b = document.getElementById(id);
    b.style.display = "none";
}