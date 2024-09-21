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