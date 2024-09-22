document.getElementById("contato-form").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email-input").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        event.preventDefault();
        
    }
});
