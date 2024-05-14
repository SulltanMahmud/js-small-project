const notesContainer = document.querySelector(".nootes-container");
const createBtn = document.querySelector(".btn");
let nootes = document.querySelectorAll(".input-box");
console.log("value", nootes);

function showNotes(){
    notesContainer.innerHTML =localStorage.getItem("notes");
}
showNotes()

// save localstorage function
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  // inputBox.className ="input-box";
  inputBox.classList.add("input-box");
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./notes-app-img/images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName == "P") {
    nootes = document.querySelectorAll("input-box");
    nootes.forEach((nt) => {
      console.log(nt);
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  };
});

document.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        document.execCommand("insertlineBreak");
        e.preventDefault()
    }
})
