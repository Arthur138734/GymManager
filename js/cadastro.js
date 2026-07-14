// ===============================
// GymManager - Cadastro de Usuário
// ===============================

const API_URL = "https://gymmanager-production-53e7.up.railway.app/auth/cadastro";

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async function (event) {

    event.preventDefault();

        const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
                const senha = document.getElementById("senha").value;
                    const confirmarSenha = document.getElementById("confirmarSenha").value;

                        if (senha !== confirmarSenha) {
                                alert("As senhas não coincidem.");
                                        return;
                                            }

                                                const usuario = {
                                                        nome,
                                                                email,
                                                                        senha
                                                                            };

                                                                                try {

                                                                                        const response = await fetch(API_URL, {

                                                                                                    method: "POST",

                                                                                                                headers: {
                                                                                                                                "Content-Type": "application/json"
                                                                                                                                            },

                                                                                                                                                        body: JSON.stringify(usuario)

                                                                                                                                                                });

                                                                                                                                                                        if (!response.ok) {
                                                                                                                                                                                    throw new Error("Erro ao cadastrar usuário.");
                                                                                                                                                                                            }

                                                                                                                                                                                                    alert("Conta criada com sucesso!");

                                                                                                                                                                                                            window.location.href = "login.html";

                                                                                                                                                                                                                } catch (error) {

                                                                                                                                                                                                                        console.error(error);

                                                                                                                                                                                                                                alert(error.message);

                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                    });