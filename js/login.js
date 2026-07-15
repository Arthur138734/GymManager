const API_URL = "https://gymmanager-production-53e7.up.railway.app/auth/login";

const form = document.getElementById("loginForm");

const registerButton = document.getElementById("registerButton");

registerButton.addEventListener("click", () => {

    window.location.href = "cadastro.html";

});

form.addEventListener("submit", async function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;

    const senha = document.getElementById("password").value;

    try{

        const response = await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                email,
                senha
            })

        });

        if(!response.ok){

            throw new Error("E-mail ou senha inválidos.");

        }

        const usuario = await response.json();

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Login realizado com sucesso!");

        window.location.href="dashboard.html";

    }catch(error){

        alert(error.message);

    }

});