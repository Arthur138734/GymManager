// ===============================
// GymManager - Configurações
// ===============================

const API_URL = "https://gymmanager-production-53e7.up.railway.app/configuracoes";

const form = document.getElementById("configForm");

const nomeAcademia = document.getElementById("nomeAcademia");
const cnpj = document.getElementById("cnpj");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const endereco = document.getElementById("endereco");
const site = document.getElementById("site");
const horario = document.getElementById("horario");
const logo = document.getElementById("logo");
const previewLogo = document.getElementById("previewLogo");

let configuracaoId = null;

// ===============================
// Carregar Configuração
// ===============================

async function carregarConfiguracao() {

    try {

            const response = await fetch(API_URL);

                    const configuracoes = await response.json();

                            if (configuracoes.length === 0) {
                                        return;
                                                }

                                                        const config = configuracoes[0];

                                                                configuracaoId = config.id;

                                                                        nomeAcademia.value = config.nomeAcademia || "";
                                                                                cnpj.value = config.cnpj || "";
                                                                                        telefone.value = config.telefone || "";
                                                                                                email.value = config.email || "";
                                                                                                        endereco.value = config.endereco || "";
                                                                                                                site.value = config.site || "";
                                                                                                                        horario.value = config.horarioFuncionamento || "";
                                                                                                                                logo.value = config.logo || "";

                                                                                                                                        if (config.logo) {
                                                                                                                                                    previewLogo.src = config.logo;
                                                                                                                                                            }

                                                                                                                                                                } catch (error) {

                                                                                                                                                                        console.error(error);

                                                                                                                                                                                alert("Erro ao carregar configurações.");

                                                                                                                                                                                    }

                                                                                                                                                                                    }

                                                                                                                                                                                    // ===============================
                                                                                                                                                                                    // Atualizar Preview da Logo
                                                                                                                                                                                    // ===============================

                                                                                                                                                                                    logo.addEventListener("input", function () {

                                                                                                                                                                                        if (logo.value.trim() !== "") {
                                                                                                                                                                                                previewLogo.src = logo.value;
                                                                                                                                                                                                    }

                                                                                                                                                                                                    });

                                                                                                                                                                                                    // ===============================
                                                                                                                                                                                                    // Salvar Configuração
                                                                                                                                                                                                    // ===============================

                                                                                                                                                                                                    form.addEventListener("submit", async function (event) {

                                                                                                                                                                                                        event.preventDefault();

                                                                                                                                                                                                            const configuracao = {

                                                                                                                                                                                                                    nomeAcademia: nomeAcademia.value,
                                                                                                                                                                                                                            cnpj: cnpj.value,
                                                                                                                                                                                                                                    telefone: telefone.value,
                                                                                                                                                                                                                                            email: email.value,
                                                                                                                                                                                                                                                    endereco: endereco.value,
                                                                                                                                                                                                                                                            site: site.value,
                                                                                                                                                                                                                                                                    horarioFuncionamento: horario.value,
                                                                                                                                                                                                                                                                            logo: logo.value

                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                    try {

                                                                                                                                                                                                                                                                                            if (configuracaoId == null) {

                                                                                                                                                                                                                                                                                                        await fetch(API_URL, {

                                                                                                                                                                                                                                                                                                                        method: "POST",

                                                                                                                                                                                                                                                                                                                                        headers: {
                                                                                                                                                                                                                                                                                                                                                            "Content-Type": "application/json"
                                                                                                                                                                                                                                                                                                                                                                            },

                                                                                                                                                                                                                                                                                                                                                                                            body: JSON.stringify(configuracao)

                                                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                                                                    alert("Configuração salva com sucesso!");

                                                                                                                                                                                                                                                                                                                                                                                                                            } else {

                                                                                                                                                                                                                                                                                                                                                                                                                                        await fetch(`${API_URL}/${configuracaoId}`, {

                                                                                                                                                                                                                                                                                                                                                                                                                                                        method: "PUT",

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        headers: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "Content-Type": "application/json"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            body: JSON.stringify(configuracao)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    alert("Configuração atualizada!");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    carregarConfiguracao();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } catch (error) {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                console.error(error);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        alert("Erro ao salvar configuração.");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            carregarConfiguracao();