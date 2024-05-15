let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let options2 = document.querySelectorAll(".options");
let list = document.getElementById("list");
console.log(options);
console.log(options2);

selectField.onclick = function () {
  list.classList.toggle("hide");
};

for (option of options2) {
  option.onclick = function () {
    list.classList.add("hide");
    selectText.innerHTML = this.textContent;
  };
}
