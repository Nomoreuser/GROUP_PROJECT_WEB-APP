

let getUsername = localStorage.getItem("username");
document.getElementById("user-name").innerHTML = getUsername;


// const clickFolder = document.getElementById("popQuote");
// const inputFolderName = document.getElementById("folderName");
// const quotedBy = document.getElementById("quotedBy");
// const quoteInp = document.getElementById("inputQuotes");
// const labelC = document.getElementById("labelC");

//nav button
let add = document.getElementById("addNew");

//main section container of them
let quotes = document.getElementById("forQuotes");
let links = document.getElementById("forLinks");
let tasks = document.getElementById("forTasks");




document.addEventListener('click', function(event){

  if(event.target === document.getElementById("addBtn")){
    document.getElementById("addList").style.display="block";
  }else if(event.target !== document.getElementById("addBtn")){
    document.getElementById("addList").style.display="none";
  }

  if(event.target === document.getElementById("popQuote") || event.target===document.getElementById("cancel")){
    document.getElementById("popQuote").style.display = "none";
    document.getElementById("quoteTitle").value="";
    document.getElementHyId("quoteInp").value="";
  }

});

function addQuotes() {
  popQuote.style.display = "block";
};

document.getElementById("quoteInp").addEventListener('input', ()=>{
  if(document.getElementById("quoteInp").value.trim() !== ""){
    document.getElementById("submitQuote").style.color=" #007bff"
    document.getElementById("submitQuote").disabled=false;
  }else{
    document.getElementById("submitQuote").style.color=" #565656c6";
    document.getElementById("submitQuote").disabled=true;
  }
})

document.getElementById("submitQuote").addEventListener('click', () =>{
  
  let getQuoteTitle = document.getElementById("quoteTitle").value;
  let getQuoteInp = document.getElementById("quoteInp").value;

  let storedQuotes = JSON.parse(localStorage.getItem("storedQuotes")) || [];
  let newQuotes = {
    title: getQuoteTitle,
    text: getQuoteInp
  };
  storedQuotes.push(newQuotes);

  localStorage.setItem("storedQuotes", JSON.stringify(storedQuotes));

  displayQuotes();
  
  document.getElementById("popQuote").style.display="none";
  document.getElementById("quoteTitle").value="";
  document.getElementById("quoteInp").value="";
});
displayQuotes();

function displayQuotes(){
  let storedQuotes = JSON.parse(localStorage.getItem("storedQuotes")) || [];
  quotes.innerHTML="";

  for(let i = 0;i<storedQuotes.length;i++){
    quotes.innerHTML += `<div><h1>${storedQuotes[i].title}</h1></div>`;
  }
}

///  -- - -- - - - -MAIN -- - - - -- - - -  -- -//
function Quotes(){
  handleShow("Quotes", quotes, links, tasks);
  displayQuotes();
}
function Links(){
  handleShow("Links",links,quotes,tasks);
}
function Todo(){
  handleShow("To-do",tasks,quotes,links)
}

function handleShow(setLabel,show,hide,hide1){
  document.getElementById("labelC").innerHTML = setLabel;

  show.style.display="block";
  hide.style.display="none";
  hide1.style.display="none";
}
///  == - - - = -= - = -= -= - =- =- = -= -= - =- =- = -=//




// popQuote.addEventListener('click', function(event) {
//     if(event.target == clickFolder || event.target == cancel){
//         clickFolder.style.display="none";
//         quotedBy.value = "";
//         quoteInp.value = "";
//     }
    
// });

// function openQuote(){
//   labelC.innerHTML = "Quote";
// }



// function addQuote(){
//     clickFolder.style.display="block";
//     inputFolderName.value="";
//     create.style.color = " #565656c6";
    
//     inputFolderName.addEventListener("input", () => {
      
//         if (inputFolderName.value.trim() === "") {
//           create.style.color = " #565656c6";
//           create.disabled = true;
//         } else {
//           create.style.color = "#007bff"; 
//           create.disabled = false;
//         }
//       });
// }



// const create = document.getElementById("create");

//   create.addEventListener('click', ()=>{
//     const inputText = inputFolderName.value.trim();

//       if (inputText !== "") {
       
//         const folderList = document.getElementById("folder-list");

//         const newFolder = document.createElement("li");
//         newFolder.id = "folders";

//         const img = document.createElement("img");
//         img.id="folderIcon";

//         const imgBox = document.createElement("div");
//         imgBox.id="imgBox";
//         imgBox.prepend(img);

//         const folderLabel = document.createElement("h2");
//         folderLabel.id="folderLabel";
//         folderLabel.textContent = inputFolderName.value;

//         folderList.prepend(newFolder);
//         newFolder.prepend(imgBox);
//         newFolder.prepend(folderLabel);

//         clickFolder.style.display="none";

//         // Create a delete button
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.className = "delete-btn";

//         newFolder.prepend(deleteButton);
//         // Add delete functionality
//         deleteButton.addEventListener("click", () => {
//           folderList.removeChild(newFolder); // Remove the <li> when clicked
//         });

//         // Append the delete button to the <li>
//         newListItem.appendChild(deleteButton);

//         // Add the new <li> to the <ul>
//         todoList.appendChild(newListItem);

//         // Clear the input field
//         inputField.value = "";
//         submitButton.style.backgroundColor = "red"; // Reset button color
//         submitButton.disabled = true; // Disable button after adding
        
//       }
//   });

