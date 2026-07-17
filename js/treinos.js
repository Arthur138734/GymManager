// ===============================
// GymManager - Cadastro de Treinos
// ===============================

// URLs da API
const API_TREINOS = "https://gymmanager-production-53e7.up.railway.app/treinos";
const API_ALUNOS = "https://gymmanager-production-53e7.up.railway.app/alunos";
const API_PROFESSORES = "https://gymmanager-production-53e7.up.railway.app/professores";

// Elementos
const trainingForm = document.getElementById("trainingForm");
const trainingTable = document.getElementById("trainingTable");

const alunoSelect = document.getElementById("aluno");
const professorSelect = document.getElementById("professor");

let treinos = [];
let editingId = null;
async function carregarAlunos() {

    const response = await fetch(API_ALUNOS);

    const alunos = await response.json();

    alunoSelect.innerHTML =
        '<option value="">Selecione um aluno</option>';

    alunos.forEach(aluno => {

        alunoSelect.innerHTML +=
            `<option value="${aluno.nome}">${aluno.nome}</option>`;

    });

}

async function carregarProfessores() {

    const response = await fetch(API_PROFESSORES);

    const professores = await response.json();

    professorSelect.innerHTML =
        '<option value="">Selecione um professor</option>';

    professores.forEach(professor => {

        professorSelect.innerHTML +=
            `<option value="${professor.nome}">${professor.nome}</option>`;

    });

}

async function carregarTreinos() {

    const response = await fetch(API_TREINOS);

    treinos = await response.json();

    renderTreinos();

}

function renderTreinos() {

    trainingTable.innerHTML = "";

    treinos.forEach(treino => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${treino.aluno}</td>
            <td>${treino.professor}</td>
            <td>${treino.nome}</td>
            <td>${treino.objetivo}</td>
            <td>${treino.status}</td>

            <td>

                <button class="edit-btn" data-id="${treino.id}">
                    Editar
                </button>

                <button class="delete-btn" data-id="${treino.id}">
                    Excluir
                </button>

            </td>
        `;

        trainingTable.appendChild(row);

    });

}

// ===============================
// Salvar / Atualizar
// ===============================

trainingForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const treino = {

        nome: document.getElementById("nomeTreino").value,
        aluno: alunoSelect.value,
        professor: professorSelect.value,
        objetivo: document.getElementById("objetivo").value,
        observacoes: document.getElementById("observacoes").value,
        status: "Ativo"

    };

    try {

        if (editingId == null) {

            await fetch(API_TREINOS, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(treino)

            });

            alert("Treino cadastrado!");

        } else {

            await fetch(`${API_TREINOS}/${editingId}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(treino)

            });

            alert("Treino atualizado!");

            editingId = null;

            trainingForm.querySelector("button[type='submit']").textContent = "Salvar";

        }

        trainingForm.reset();

        carregarTreinos();

    } catch (error) {

        console.error(error);

        alert("Erro ao salvar treino.");

    }

});

// ===============================
// Eventos da tabela
// ===============================

trainingTable.addEventListener("click", function (event) {

    const button = event.target;

    const id = Number(button.dataset.id);

    if (button.classList.contains("edit-btn")) {

        editTreino(id);

    }

    if (button.classList.contains("delete-btn")) {

        deleteTreino(id);

    }

});

// ===============================
// Excluir
// ===============================

async function deleteTreino(id) {

    if (!confirm("Deseja excluir este treino?")) {

        return;

    }

    try {

        await fetch(`${API_TREINOS}/${id}`, {

            method: "DELETE"

        });

        carregarTreinos();

    } catch (error) {

        console.error(error);

        alert("Erro ao excluir treino.");

    }

}

// ===============================
// Editar
// ===============================

function editTreino(id) {

    const treino = treinos.find(t => t.id === id);

    if (!treino) {

        return;

    }

    document.getElementById("nomeTreino").value = treino.nome;
    alunoSelect.value = treino.aluno;
    professorSelect.value = treino.professor;
    document.getElementById("objetivo").value = treino.objetivo;
    document.getElementById("observacoes").value = treino.observacoes;

    editingId = treino.id;

    trainingForm.querySelector("button[type='submit']").textContent = "Atualizar";

}

// ===============================
// Inicialização
// ===============================

carregarAlunos();
carregarProfessores();
carregarTreinos();
renderTreinos();

carregarTreinos();

editarTreino();

excluirTreino();