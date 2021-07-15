const email = document.getElementById("email");
const error = document.getElementById("emailError");

var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.getElementById("subBtn").addEventListener("click", function () {
  if (email.value.match(validRegex)) {
    error.style.display = "none";
  } else if (email.value == "") {
    error.style.display = "block";
    error.innerHTML = "Email can't be empty";
    email.style.border = "1px solid red";
    email.placeholder = "example@email/com";
    email.value = "";
    email.style.border = "1px solid red";
  } else {
    error.style.display = "block";
    error.innerHTML = "Please provide a valid email address";
    email.style.border = "1px solid red";
    email.placeholder = "example@email/com";
    email.value = "";
  }
});
