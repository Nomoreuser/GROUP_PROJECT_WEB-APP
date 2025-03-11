
const clickFolder = document.getElementById("pop-up");
const inputFolderName = document.getElementById("folderName");


clickFolder.addEventListener('click', (event) => {
    if(event.target == clickFolder || event.target == cancel){
        clickFolder.style.display="none";
    }
    
});

function createFolder(){
    clickFolder.style.display="block";
    inputFolderName.value="";
    create.style.color = " #565656c6";
    
    inputFolderName.addEventListener("input", () => {
      
        if (inputFolderName.value.trim() === "") {
          create.style.color = " #565656c6";
          create.disabled = true;
        } else {
          create.style.color = "#007bff"; 
          create.disabled = false;
        }
      });
}



const create = document.getElementById("create");

  create.addEventListener('click', ()=>{
    const inputText = inputFolderName.value.trim();

      if (inputText !== "") {
       
        const folderList = document.getElementById("folder-list");

        const newFolder = document.createElement("li");
        newFolder.id = "folders";

        const img = document.createElement("img");
        img.id="folderIcon";

        const imgBox = document.createElement("div");
        imgBox.id="imgBox";
        imgBox.prepend(img);

        const folderLabel = document.createElement("h2");
        folderLabel.id="folderLabel";
        folderLabel.textContent = inputFolderName.value;

        folderList.prepend(newFolder);
        newFolder.prepend(imgBox);
        newFolder.prepend(folderLabel);

        clickFolder.style.display="none";

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        newFolder.prepend(deleteButton);
        // Add delete functionality
        deleteButton.addEventListener("click", () => {
          folderList.removeChild(newFolder); // Remove the <li> when clicked
        });

        // Append the delete button to the <li>
        newListItem.appendChild(deleteButton);

        // Add the new <li> to the <ul>
        todoList.appendChild(newListItem);

        // Clear the input field
        inputField.value = "";
        submitButton.style.backgroundColor = "red"; // Reset button color
        submitButton.disabled = true; // Disable button after adding
        
      }
  });

