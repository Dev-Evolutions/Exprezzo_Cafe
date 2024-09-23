document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('cpf-registro').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos
        e.target.value = value.replace(/(\d{3})(\d)/, '$1.$2')
                               .replace(/(\d{3})(\d)/, '$1.$2')
                               .replace(/(\d{2})$/, '-$1');
    });

    document.getElementById('cnpj-registro').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 14) value = value.slice(0, 14);
        e.target.value = value.replace(/(\d{2})(\d)/, '$1.$2')
                               .replace(/(\d{3})(\d)/, '$1.$2')
                               .replace(/(\d{3})(\d)/, '$1/$2')
                               .replace(/(\d{4})(\d)/, '$1-$2');
    });

    document.getElementById('telefone-registro').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        if (value.length > 10) {
            e.target.value = value.replace(/(\d{2})(\d{5})(\d)/, '($1) $2-$3');
        } else {
            e.target.value = value.replace(/(\d{2})(\d)/, '($1) $2');
        }
    });

    document.getElementById('cep-registro').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 8) value = value.slice(0, 8);
        e.target.value = value.replace(/(\d{5})(\d)/, '$1-$2');
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarCPF(cpf) {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return regex.test(cpf);
    }

    function validarCNPJ(cnpj) {
        const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
        return regex.test(cnpj);
    }

    function validarTelefone(telefone) {
        const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
        return regex.test(telefone);
    }

    function validarCEP(cep) {
        const regex = /^\d{5}-\d{3}$/;
        return regex.test(cep);
    }

    function validarSenha(senha, confirmarSenha) {
        return senha.length >= 6 && senha === confirmarSenha;
    }

    function limparMensagens() {
        document.getElementById('email-erro').textContent = "";
        document.getElementById('cpf-erro').textContent = "";
        document.getElementById('cnpj-erro').textContent = "";
        document.getElementById('telefone-erro').textContent = "";
        document.getElementById('cep-erro').textContent = "";
        document.getElementById('senha-erro').textContent = "";
        document.getElementById('confirmar-senha-erro').textContent = "";
    }

    document.getElementById('btn-registro').addEventListener('click', function (event) {
        event.preventDefault();

        const email = document.getElementById('email-registro').value;
        const cpf = document.getElementById('cpf-registro').value;
        const cnpj = document.getElementById('cnpj-registro').value;
        const telefone = document.getElementById('telefone-registro').value;
        const cep = document.getElementById('cep-registro').value;
        const senha = document.getElementById('registro-senha').value;
        const confirmarSenha = document.getElementById('confirmar-senha-registro').value;

        let isValid = true;

        limparMensagens();

        if (!validarEmail(email)) {
            document.getElementById('email-erro').textContent = "E-mail inválido!";
            isValid = false;
        }

        if (!validarCPF(cpf)) {
            document.getElementById('cpf-erro').textContent = "CPF inválido! Formato esperado: 000.000.000-00";
            isValid = false;
        }

        if (!validarCNPJ(cnpj)) {
            document.getElementById('cnpj-erro').textContent = "CNPJ inválido! Formato esperado: 00.000.000/0000-00";
            isValid = false;
        }

        if (!validarTelefone(telefone)) {
            document.getElementById('telefone-erro').textContent = "Telefone inválido! Formato esperado: (00) 00000-0000";
            isValid = false;
        }

        if (!validarCEP(cep)) {
            document.getElementById('cep-erro').textContent = "CEP inválido! Formato esperado: 00000-000";
            isValid = false;
        }

        if (!validarSenha(senha, confirmarSenha)) {
            document.getElementById('senha-erro').textContent = "A senha deve ter no mínimo 6 caracteres e as senhas devem coincidir!";
            isValid = false; 
        }

        if (isValid) {
            alert("Registro realizado com sucesso!");
            window.location.href = "./index.html";
        }
    });
});
