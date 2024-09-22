document.getElementById("contato-form").addEventListener("submit", function(event) {
    // Pegar o valor do campo de email
    const emailInput = document.getElementById("email-input").value;
    const mensagemInput = document.getElementById("mensagem-input").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById("email-error");

    if (!emailRegex.test(emailInput)) {
        event.preventDefault(); 
        
        emailError.style.display = "inline";
    } else {
        emailError.style.display = "none";
        localStorage.setItem("email", emailInput);
        localStorage.setItem("mensagem", mensagemInput);
    }
});
