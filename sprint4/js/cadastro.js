const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

function checkInputUsername() {
  const usernameValue = username.value.trim();

  if (usernameValue === "") {
    errorInput(username, "Digite um nome de usuário.");
  } else {
    clearError(username);
  }
}

function checkInputEmail() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.");
  } else {
    clearError(email);
  }
}

function checkInputPassword() {
  const passwordValue = password.value.trim();

  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    clearError(password);
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value.trim();
  const confirmationPasswordValue = passwordConfirmation.value.trim();

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.");
  } else {
    clearError(passwordConfirmation);
  }
}

function checkForm() {
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  if (!hasErrors()) {
    alert("CADASTRADO COM SUCESSO!");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const errorMessage = formItem.querySelector("a");

  errorMessage.innerText = message;
  errorMessage.style.visibility = "visible";
  formItem.classList.add("error");
}

function clearError(input) {
  const formItem = input.parentElement;
  const errorMessage = formItem.querySelector("a");

  errorMessage.innerText = "";
  errorMessage.style.visibility = "hidden";
  formItem.classList.remove("error");
}

function hasErrors() {
  const errorInputs = form.querySelectorAll(".form-content.error");
  return errorInputs.length > 0;
}
