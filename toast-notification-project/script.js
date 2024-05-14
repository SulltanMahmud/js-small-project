let toastBox = document.getElementById("toastBox");
let SuccessMsg = '<i class="fa-solid fa-circle-check"></i> Sucessfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> You have an error';
let invalidMsg = '<i class="fa-solid fa-exclamation"></i> Invalid Message';

function showTost(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML =  msg;
  toastBox.appendChild(toast);
  if(msg.includes('error')){
    toast.classList.add('error');
    toast.style.backgroundColor ='pink'
  }

  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
    toast.style.backgroundColor ='blue'
  }

  setTimeout(()=>{
    toast.remove()
  },3000)
}
