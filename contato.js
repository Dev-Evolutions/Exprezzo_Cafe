document.getElementById("contato-form").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email-input").value;
    const mensagemInput = document.getElementById("mensagem-input").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
        event.preventDefault(); 
    } else {
        localStorage.setItem("email", emailInput);
        localStorage.setItem("mensagem", mensagemInput);
    }
});
