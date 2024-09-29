localStorage.setItem("email", "exprezzo@email.com");
localStorage.setItem("password", "123456");


const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (checkForm()) {
    if (validateLogin()) {
      alert("Loin realizada com sucesso!");
    } else {
      alert("Email ou senha incorretos. Tente novamente.");
    }
  }
});

email.addEventListener("blur", () => {
    checkInputEmail();
  });
  
password.addEventListener("blur", () => {
    checkInputPassword();
});
  
function checkInputEmail() {
    const emailValue = email.value;
  
    if (emailValue === "") {
      errorInput(email, "O email é obrigatório.");
    } else if (!emailValue.includes("@")) {
      errorInput(email, "O email deve conter '@'.");
    } else {
      const formItem = email.parentElement;
      formItem.className = "form-content";
    }
}
  
function checkInputPassword() {
    const passwordValue = password.value;
  
    if (passwordValue === "") {
      errorInput(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 6) {
      errorInput(password, "Mínimo 6 caracteres.");
    } else {
      const formItem = password.parentElement;
      formItem.className = "form-content";
    }
}

function checkForm() {
    checkInputEmail();
    checkInputPassword();
  
    const formItems = form.querySelectorAll(".form-content");
  
    const isValid = [...formItems].every((item) => {
      return item.className === "form-content"; // Se não houver erro
    });
  
    return isValid;
}
  
function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span");
  
    textMessage.innerText = message;
    formItem.className = "form-content error";
}

function validateLogin() {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
  
    const emailValue = email.value;
    const passwordValue = password.value;
  
    return emailValue === storedEmail && passwordValue === storedPassword;
}
  
form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    if (checkForm()) {
      if (validateLogin()) {
        window.location.href = "index.html";
      }
    }
});