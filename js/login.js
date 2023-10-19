const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

function checkForm() {
  checkInputUsername();
  checkInputPassword();

  if (!hasErrors()) {
    alert("Login bem-sucedido!");
  }
}

function checkInputUsername() {
  const usernameValue = username.value.trim();

  if (usernameValue === "") {
    errorInput(username, "Digite um nome de usuário.");
  } else {
    clearError(username);
  }
}

function checkInputPassword() {
  const passwordValue = password.value.trim();

  if (passwordValue === "") {
    errorInput(password, "Digite sua senha.");
  } else {
    clearError(password);
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const errorMessage = formItem.querySelector(".error-message");

  errorMessage.innerText = message;
  errorMessage.style.visibility = "visible";
  formItem.classList.add("error");
}

function clearError(input) {
  const formItem = input.parentElement;
  const errorMessage = formItem.querySelector(".error-message");

  errorMessage.innerText = "";
  errorMessage.style.visibility = "hidden";
  formItem.classList.remove("error");
}

function hasErrors() {
  const errorInputs = form.querySelectorAll(".form-content.error");
  return errorInputs.length > 0;
}
