// ===============================
// GymManager - Cadastro de Alunos
// ===============================

// URL da API
const API_URL = "https://gymmanager-production-53e7.up.railway.app/alunos";

// Elementos
const studentForm = document.getElementById("studentForm");
const studentsTable = document.getElementById("studentsTable");
const searchStudent = document.getElementById("searchStudent");

// Lista de alunos
let students = [];
let editingId = null;

// ===============================
// Carregar alunos da API
// ===============================

async function carregarAlunos() {

    try {

        const response = await fetch(API_URL);

        students = await response.json();

        renderStudents(searchStudent.value);

    } catch (error) {

        console.error(error);

        alert("Erro ao carregar alunos.");

    }

}

// ===============================
// Mostrar alunos
// ===============================

function renderStudents(search = "") {

    studentsTable.innerHTML = "";

    const filtered = students.filter(student =>
        student.nome.toLowerCase().includes(search.toLowerCase())
    );

    filtered.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.nome}</td>
            <td>${student.telefone}</td>
            <td>${student.objetivo}</td>
            <td>${student.status}</td>

            <td>

                <button class="edit-btn" data-id="${student.id}">
                    Editar
                </button>

                <button class="delete-btn" data-id="${student.id}">
                    Excluir
                </button>

            </td>
        `;

        studentsTable.appendChild(row);

    });

}

// ===============================
// Pesquisa
// ===============================

searchStudent.addEventListener("input", () => {

    renderStudents(searchStudent.value);

});

// ===============================
// Salvar / Atualizar
// ===============================

studentForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const student = {

        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        peso: parseFloat(document.getElementById("peso").value),
        altura: parseFloat(document.getElementById("altura").value),
        objetivo: document.getElementById("objetivo").value,
        status: "Ativo"

    };

    try {

        if (editingId == null) {

            await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)

            });

            alert("Aluno cadastrado!");

        } else {

            await fetch(`${API_URL}/${editingId}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)

            });

            alert("Aluno atualizado!");

            editingId = null;

            document.querySelector(".buttons button[type='submit']").textContent = "Salvar";

        }

        studentForm.reset();

        carregarAlunos();

    } catch (error) {

        console.error(error);

        alert("Erro ao salvar aluno.");

    }

});

// ===============================
// Eventos da tabela
// ===============================

studentsTable.addEventListener("click", function (event) {

    const button = event.target;

    const id = Number(button.dataset.id);

    if (button.classList.contains("edit-btn")) {

        editStudent(id);

    }

    if (button.classList.contains("delete-btn")) {

        deleteStudent(id);

    }

});

// ===============================
// Excluir
// ===============================

async function deleteStudent(id) {

    if (!confirm("Deseja excluir este aluno?")) {

        return;

    }

    try {

        await fetch(`${API_URL}/${id}`, {

            method: "DELETE"

        });

        carregarAlunos();

    } catch (error) {

        console.error(error);

        alert("Erro ao excluir aluno.");

    }

}

// ===============================
// Editar
// ===============================

function editStudent(id) {

    const student = students.find(s => s.id === id);

    if (!student) {

        return;

    }

    document.getElementById("nome").value = student.nome;
    document.getElementById("cpf").value = student.cpf;
    document.getElementById("telefone").value = student.telefone;
    document.getElementById("email").value = student.email;
    document.getElementById("peso").value = student.peso;
    document.getElementById("altura").value = student.altura;
    document.getElementById("objetivo").value = student.objetivo;

    editingId = student.id;

    document.querySelector(".buttons button[type='submit']").textContent = "Atualizar";

}

// ===============================
// Inicialização
// ===============================

carregarAlunos();