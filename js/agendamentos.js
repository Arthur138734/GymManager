// ========================================
// GymManager - Agendamentos
// ========================================

// APIs
const API_AGENDAMENTOS = "https://gymmanager-production-53e7.up.railway.app/agendamentos";
const API_ALUNOS = "https://gymmanager-production-53e7.up.railway.app/alunos";
const API_PROFESSORES = "https://gymmanager-production-53e7.up.railway.app/professores";

// Elementos
const form = document.getElementById("appointmentForm");
const tabela = document.getElementById("appointmentsTable");

const selectAluno = document.getElementById("aluno");
const selectProfessor = document.getElementById("professor");

const calendar = document.getElementById("calendar");
const mesAno = document.getElementById("mesAno");

let editandoId = null;

let dataAtual = new Date();

const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

// ==============================
// Inicialização
// ==============================

window.onload = () => {

    carregarAlunos();

    carregarProfessores();

    listarAgendamentos();

    gerarCalendario();

};

// ==============================
// Carregar alunos
// ==============================

async function carregarAlunos() {

    try {

        const response = await fetch(API_ALUNOS);

        const alunos = await response.json();

        selectAluno.innerHTML = `
            <option value="">Selecione um aluno</option>
        `;

        alunos.forEach(aluno => {

            selectAluno.innerHTML += `
                <option value="${aluno.nome}">
                    ${aluno.nome}
                </option>
            `;

        });

    } catch (erro) {

        console.error("Erro ao carregar alunos", erro);

    }

}

// ==============================
// Carregar professores
// ==============================

async function carregarProfessores() {

    try {

        const response = await fetch(API_PROFESSORES);

        const professores = await response.json();

        selectProfessor.innerHTML = `
            <option value="">Selecione um professor</option>
        `;

        professores.forEach(professor => {

            selectProfessor.innerHTML += `
                <option value="${professor.nome}">
                    ${professor.nome}
                </option>
            `;

        });

    } catch (erro) {

        console.error("Erro ao carregar professores", erro);

    }

}

// ==============================
// Salvar Agendamento
// ==============================

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const agendamento = {

        aluno: selectAluno.value,

        professor: selectProfessor.value,

        data: document.getElementById("data").value,

        hora: document.getElementById("hora").value,

        tipo: document.getElementById("tipo").value,

        observacao: document.getElementById("observacao").value,

        status: document.getElementById("status").value

    };

    try {

        if (editandoId == null) {

            await fetch(API_AGENDAMENTOS, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(agendamento)

            });

        } else {

            await fetch(`${API_AGENDAMENTOS}/${editandoId}`, {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(agendamento)

            });

            editandoId = null;

        }

        form.reset();

        listarAgendamentos();

        gerarCalendario();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao salvar agendamento.");

    }

});

// ==============================
// Listar Agendamentos
// ==============================

async function listarAgendamentos() {

    try {

        const response = await fetch(API_AGENDAMENTOS);

        const lista = await response.json();

        tabela.innerHTML = "";

        lista.forEach(agendamento => {

            tabela.innerHTML += `

                <tr>

                    <td>${agendamento.aluno}</td>

                    <td>${agendamento.professor}</td>

                    <td>${agendamento.data}</td>

                    <td>${agendamento.hora}</td>

                    <td>${agendamento.status}</td>

                    <td>

                        <button onclick="editar(${agendamento.id})">

                            Editar

                        </button>

                        <button onclick="excluir(${agendamento.id})">

                            Excluir

                        </button>

                    </td>

                </tr>

            `;

        });

    } catch (erro) {

        console.error("Erro ao listar agendamentos", erro);

    }

}

// ==============================
// Editar Agendamento
// ==============================

async function editar(id) {

    try {

            const response = await fetch(`${API_AGENDAMENTOS}/${id}`);

                    const agendamento = await response.json();

                            selectAluno.value = agendamento.aluno;
                                    selectProfessor.value = agendamento.professor;

                                            document.getElementById("data").value = agendamento.data;
                                                    document.getElementById("hora").value = agendamento.hora;
                                                            document.getElementById("tipo").value = agendamento.tipo;
                                                                    document.getElementById("observacao").value = agendamento.observacao;
                                                                            document.getElementById("status").value = agendamento.status;

                                                                                    editandoId = id;

                                                                                            form.querySelector("button[type='submit']").textContent = "Atualizar";

                                                                                                } catch (erro) {

                                                                                                        console.error(erro);

                                                                                                                alert("Erro ao carregar agendamento.");

                                                                                                                    }

                                                                                                                    }

                                                                                                                    // ==============================
                                                                                                                    // Excluir Agendamento
                                                                                                                    // ==============================

                                                                                                                    async function excluir(id) {

                                                                                                                        if (!confirm("Deseja realmente excluir este agendamento?")) {

                                                                                                                                return;

                                                                                                                                    }

                                                                                                                                        try {

                                                                                                                                                await fetch(`${API_AGENDAMENTOS}/${id}`, {

                                                                                                                                                            method: "DELETE"

                                                                                                                                                                    });

                                                                                                                                                                            listarAgendamentos();

                                                                                                                                                                                    gerarCalendario();

                                                                                                                                                                                        } catch (erro) {

                                                                                                                                                                                                console.error(erro);

                                                                                                                                                                                                        alert("Erro ao excluir.");

                                                                                                                                                                                                            }

                                                                                                                                                                                                            }

                                                                                                                                                                                                            // ==============================
                                                                                                                                                                                                            // Calendário
                                                                                                                                                                                                            // ==============================

                                                                                                                                                                                                            async function gerarCalendario() {

                                                                                                                                                                                                                const ano = dataAtual.getFullYear();

                                                                                                                                                                                                                    const mes = dataAtual.getMonth();

                                                                                                                                                                                                                        mesAno.textContent = `${meses[mes]} ${ano}`;

                                                                                                                                                                                                                            calendar.innerHTML = "";

                                                                                                                                                                                                                                const response = await fetch(API_AGENDAMENTOS);

                                                                                                                                                                                                                                    const agendamentos = await response.json();

                                                                                                                                                                                                                                        const primeiroDia = new Date(ano, mes, 1);

                                                                                                                                                                                                                                            const ultimoDia = new Date(ano, mes + 1, 0);

                                                                                                                                                                                                                                                for (let i = 0; i < primeiroDia.getDay(); i++) {

                                                                                                                                                                                                                                                        calendar.innerHTML += `
                                                                                                                                                                                                                                                                    <div class="dia vazio"></div>
                                                                                                                                                                                                                                                                            `;

                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {

                                                                                                                                                                                                                                                                                            const data = `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;

                                                                                                                                                                                                                                                                                                    const possuiAgendamento = agendamentos.some(a => a.data === data);

                                                                                                                                                                                                                                                                                                            calendar.innerHTML += `

                                                                                                                                                                                                                                                                                                                        <div class="dia ${possuiAgendamento ? "ocupado" : ""}"
                                                                                                                                                                                                                                                                                                                                         data-data="${data}">

                                                                                                                                                                                                                                                                                                                                                         ${dia}

                                                                                                                                                                                                                                                                                                                                                                     </div>

                                                                                                                                                                                                                                                                                                                                                                             `;

                                                                                                                                                                                                                                                                                                                                                                                 }

                                                                                                                                                                                                                                                                                                                                                                                     document.querySelectorAll(".dia").forEach(dia => {

                                                                                                                                                                                                                                                                                                                                                                                             dia.addEventListener("click", async function () {

                                                                                                                                                                                                                                                                                                                                                                                                         if (this.classList.contains("vazio")) {

                                                                                                                                                                                                                                                                                                                                                                                                                         return;

                                                                                                                                                                                                                                                                                                                                                                                                                                     }

                                                                                                                                                                                                                                                                                                                                                                                                                                                 const dataSelecionada = this.dataset.data;

                                                                                                                                                                                                                                                                                                                                                                                                                                                             const response = await fetch(API_AGENDAMENTOS);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                         const lista = await response.json();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     const eventos = lista.filter(a => a.data === dataSelecionada);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 if (eventos.length === 0) {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 alert("Nenhum agendamento nesta data.");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 return;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         let mensagem = "Agendamentos:\n\n";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     eventos.forEach(e => {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     mensagem +=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         `${e.hora} - ${e.aluno}\nProfessor: ${e.professor}\nStatus: ${e.status}\n\n`;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 alert(mensagem);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             // ==============================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             // Navegação do calendário
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             // ==============================

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             document.getElementById("mesAnterior").addEventListener("click", () => {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 dataAtual.setMonth(dataAtual.getMonth() - 1);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     gerarCalendario();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     document.getElementById("proximoMes").addEventListener("click", () => {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         dataAtual.setMonth(dataAtual.getMonth() + 1);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             gerarCalendario();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             });