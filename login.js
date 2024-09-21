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