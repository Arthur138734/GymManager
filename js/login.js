const form = document.getElementById("loginForm");

const email = document.getElementById("email");

const password = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

// Mostrar senha

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";
        togglePassword.textContent = "🙈";

    }else{

        password.type = "password";
        togglePassword.textContent = "👁";

    }

});

// Login

form.addEventListener("submit", function(event){

    event.preventDefault();

    document.querySelector(".message")?.remove();

    if(email.value.trim() === ""){

        showMessage("Informe seu e-mail.","error");
        return;

    }

    if(password.value.trim() === ""){

        showMessage("Informe sua senha.","error");
        return;

    }

    const loginButton = document.getElementById("loginButton");

loginButton.disabled = true;
loginButton.textContent = "Entrando...";

    // Simulação da resposta do servidor

    setTimeout(()=>{

        showMessage("Login realizado com sucesso!","success");

loginButton.disabled = false;
loginButton.textContent = "Entrar";
    },2000);

});

function showMessage(text,type){

    const message = document.createElement("div");

    message.className = `message ${type}`;

    message.textContent = text;

    form.appendChild(message);

}