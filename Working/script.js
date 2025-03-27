

let getUsername = localStorage.getItem("username");
document.getElementById("user-name").innerHTML = getUsername;


let quotes = document.getElementById("forQuotes");
let links = document.getElementById("forLinks");
let tasks = document.getElementById("forTodo");




document.addEventListener('click', function(event){

  if(event.target === document.getElementById("addBtn")){
    document.getElementById("addList").style.display="block";

  }else{
    document.getElementById("addList").style.display="none";
  }

  if(event.target === document.getElementById("popQuote") || event.target===document.getElementById("cancel")){
    document.getElementById("popQuote").style.display = "none";
    document.getElementById("quoteInp").value="";
    document.getElementById("quoteTitle").value="";
  }

  if(event.target === document.getElementById("cancelLink") || event.target === document.getElementById("popLink")){
    document.getElementById("popLink").style.display="none";
    document.getElementById("linkName").value="";
    document.getElementById("linkURL").value="";
  }

});

function addQuotes() {
  document.getElementById("submitQuote").style.color=" #565656c6";
  document.getElementById("submitQuote").disabled=true;

  document.getElementById("quoteInp").value="";
  document.getElementById("quoteTitle").value="";
  
  document.getElementById("popQuote").style.display = "block";
};
function addLinks(){
  document.getElementById("popLink").style.display="block";
}




document.addEventListener('input', ()=>{

  //quote text box checking if i put text
  if(document.getElementById("quoteInp").value.trim() !== ""){
    document.getElementById("submitQuote").style.color=" #007bff"
    document.getElementById("submitQuote").disabled=false;
  }else{
    document.getElementById("submitQuote").style.color=" #565656c6";
    document.getElementById("submitQuote").disabled=true;
  }

  //same in link
  if(document.getElementById("linkURL").value.trim() !== ""){
    document.getElementById("submitLink").style.color=" #007bff";
    document.getElementById("submitLink").disabled=false;
  }else{
    document.getElementById("submitLink").style.color=" #565656c6";
    document.getElementById("submitLink").disabled=true;
  }
});


const today = new Date();
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();

let dateCreated = "- "+day+"/"+month+"/"+year+" -";



// - - - -- - -=-  = -= =id popQuote  = = == -=- =- =- = -= -= -=- =- =


console.log(dateCreated);

document.getElementById("submitQuote").addEventListener('click', () =>{
  
  let getQuoteTitle = document.getElementById("quoteTitle").value;
  let getQuoteInp = document.getElementById("quoteInp").value;

  let storedQuotes = JSON.parse(localStorage.getItem("storedQuotes")) || [];

  if(getQuoteTitle === ""){
    getQuoteTitle = "Untitled Quote";
  }

  let newQuotes = {
    title: getQuoteTitle,
    text: getQuoteInp,
    date: dateCreated
  };
  storedQuotes.unshift(newQuotes);

  localStorage.setItem("storedQuotes", JSON.stringify(storedQuotes));
  

  displayQuotes();

  
  document.getElementById("popQuote").style.display="none";

  Quotes();
  
}); 

function displayQuotes(){
  let storedQuotes = JSON.parse(localStorage.getItem("storedQuotes")) || [];
  quotes.innerHTML="";

  for(let i = 0;i<storedQuotes.length;i++){
    quotes.innerHTML += `
      <div class="quoteList">
        <div class="titleDate">
          <h1>${storedQuotes[i].title}</h1>
          <small>${storedQuotes[i].date}</small>
        </div>
        <div onclick="delQuote(${i})">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </div>
      </div>`;
  };

  
};

function delQuote(i){
  let storedQuotes = JSON.parse(localStorage.getItem("storedQuotes")) || [];
  storedQuotes.splice(i,1);

  localStorage.setItem("storedQuotes", JSON.stringify(storedQuotes));
  displayQuotes();
}
/// = == = = =- =- =- = -= - =- =-=-=----- - =- =- =- =- =- = -= -= -= -= ///

// =-=--==00==--==-=-=--  popLink -=-=-=-=-=-=-=-=-=










let visit = 0;

document.getElementById("submitLink").addEventListener('click', function(event){

  let url = document.getElementById("linkURL").value;
  let domain = new URL(url).hostname; // Extract domain
  let faviconUrl = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

  if(linkName.value === ""){
    linkName.value = linkURL.value;
  }

  links.innerHTML += `
    <a href="${linkURL.value}" target="_blank">
    <div class="linkList">
      <div class="linkImg"><img src="${faviconUrl}"></div>
      <h2>${linkName.value}</h2>
      <div class="linkVisit">
        <small>Visit: ${visit}</small><br>
        <small>Last visit: ${dateCreated}</small>
      </div>
      
    </div>
    </a>
  `
  visit++;

  document.getElementById("linkName").value="";
  document.getElementById("linkURL").value="";
  document.getElementById("popLink").style.display="none";

  Links();
});

/// --0-0-0-0-0-0-0=-=-=-=-==0-09-0=0=-=-=-=-=-=-=////


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

