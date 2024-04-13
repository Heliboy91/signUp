const password = document.querySelector("#pass");
const confirmedPass = document.querySelector("#confirm_pass");
const button = document.querySelector("button");
const message = document.querySelector(".message");

const validatePass = function(event){
    if(confirmedPass.value != password.value) {
        confirmedPass.style.outline = "2px solid red";
        message.style.visibility = "visible";
        setTimeout(() => {
            message.style.visibility = "hidden";
          }, "2000");
          event.preventDefault();
          return false;

    }
    else {
        confirmedPass.style.outline = "2px solid green";
    }
}

button.addEventListener("click", e =>{
    validatePass(e);
}) 