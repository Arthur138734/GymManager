// ===============================
// GymManager - Esqueci Minha Senha
// ===============================

const API_URL = "https://gymmanager-production-53e7.up.railway.app/auth/esqueci-senha";

const form = document.getElementById("forgotPasswordForm");

form.addEventListener("submit", async function(event){

    event.preventDefault();

        const email = document.getElementById("email").value;

            try{

                    const response = await fetch(API_URL,{

                                method:"POST",

                                            headers:{
                                                            "Content-Type":"application/json"
                                                                        },

                                                                                    body:JSON.stringify({email})

                                                                                            });

                                                                                                    if(!response.ok){

                                                                                                                throw new Error("Não foi possível enviar a solicitação.");

                                                                                                                        }

                                                                                                                                alert("Solicitação enviada com sucesso!");

                                                                                                                                        window.location.href="login.html";

                                                                                                                                            }catch(error){

                                                                                                                                                    console.error(error);

                                                                                                                                                            alert(error.message);

                                                                                                                                                                }

                                                                                                                                                                });