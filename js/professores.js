// ===============================
// GymManager - Cadastro de Professores
// ===============================

// URL da API
const API_URL = "https://gymmanager-production-53e7.up.railway.app/professores";

// Elementos
const teacherForm = document.getElementById("teacherForm");
const teachersTable = document.getElementById("teachersTable");
const searchTeacher = document.getElementById("searchTeacher");

// Lista
let teachers = [];
let editingId = null;

// ===============================
// Carregar professores
// ===============================

async function carregarProfessores() {

    try {

        const response = await fetch(API_URL);

        teachers = await response.json();

        renderTeachers(searchTeacher.value);

    } catch (error) {

        console.error(error);

        alert("Erro ao carregar professores.");

    }

}

// ===============================
// Mostrar professores
// ===============================

function renderTeachers(search = "") {

    teachersTable.innerHTML = "";

    const filtered = teachers.filter(teacher =>
        teacher.nome.toLowerCase().includes(search.toLowerCase())
    );

    filtered.forEach(teacher => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${teacher.nome}</td>
            <td>${teacher.especialidade}</td>
            <td>${teacher.cref}</td>
            <td>${teacher.status}</td>

            <td>

                <button class="edit-btn" data-id="${teacher.id}">
                    Editar
                </button>

                <button class="delete-btn" data-id="${teacher.id}">
                    Excluir
                </button>

            </td>
        `;

        teachersTable.appendChild(row);

    });

}

// ===============================
// Pesquisa
// ===============================

searchTeacher.addEventListener("input", () => {

    renderTeachers(searchTeacher.value);

});

// ===============================
// Salvar / Atualizar
// ===============================

teacherForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const teacher = {

        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        especialidade: document.getElementById("especialidade").value,
        cref: document.getElementById("cref").value,
        salario: parseFloat(document.getElementById("salario").value),
        status: document.getElementById("status").value

    };

    try {

        if (editingId == null) {

            await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(teacher)

            });

            alert("Professor cadastrado!");

        } else {

            await fetch(`${API_URL}/${editingId}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(teacher)

            });

            alert("Professor atualizado!");

            editingId = null;

            teacherForm.querySelector("button[type='submit']").textContent = "Salvar";

        }

        teacherForm.reset();

        carregarProfessores();

    } catch (error) {

        console.error(error);

        alert("Erro ao salvar professor.");

    }

});

// ===============================
// Eventos da tabela
// ===============================

teachersTable.addEventListener("click", function (event) {

    const button = event.target;

    const id = Number(button.dataset.id);

    if (button.classList.contains("edit-btn")) {

        editTeacher(id);

    }

    if (button.classList.contains("delete-btn")) {

        deleteTeacher(id);

    }

});

// ===============================
// Excluir
// ===============================

async function deleteTeacher(id) {

    if (!confirm("Deseja excluir este professor?")) {

        return;

    }

    try {

        await fetch(`${API_URL}/${id}`, {

            method: "DELETE"

        });

        carregarProfessores();

    } catch (error) {

        console.error(error);

        alert("Erro ao excluir professor.");

    }

}

// ===============================
// Editar
// ===============================

function editTeacher(id) {

    const teacher = teachers.find(t => t.id === id);

    if (!teacher) {

        return;

    }

    document.getElementById("nome").value = teacher.nome;
    document.getElementById("cpf").value = teacher.cpf;
    document.getElementById("telefone").value = teacher.telefone;
    document.getElementById("email").value = teacher.email;
    document.getElementById("especialidade").value = teacher.especialidade;
    document.getElementById("cref").value = teacher.cref;
    document.getElementById("salario").value = teacher.salario;
    document.getElementById("status").value = teacher.status;

    editingId = teacher.id;

    teacherForm.querySelector("button[type='submit']").textContent = "Atualizar";

}

// ===============================
// Inicialização
// ===============================

carregarProfessores();