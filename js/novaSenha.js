const API_URL = "https://gymmanager-production-53e7.up.railway.app/auth/nova-senha";

const form = document.getElementById("novaSenhaForm");

form.addEventListener("submit", async function(event){

    event.preventDefault();

        const senha = document.getElementById("senha").value;
            const confirmarSenha = document.getElementById("confirmarSenha").value;
                const email = document.getElementById("email").value;

                    if(senha !== confirmarSenha){

                            alert("As senhas não coincidem.");

                                    return;

                                        }

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

                                                                                                                                                                                            throw new Error("Erro ao alterar senha.");

                                                                                                                                                                                                    }

                                                                                                                                                                                                            alert("Senha alterada com sucesso!");

                                                                                                                                                                                                                    window.location.href="login.html";

                                                                                                                                                                                                                        }catch(error){

                                                                                                                                                                                                                                console.error(error);

                                                                                                                                                                                                                                        alert(error.message);

                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                            });