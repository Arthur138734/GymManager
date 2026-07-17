// =====================================
// GymManager - Cadastro de Alunos
// =====================================

const API_URL = "https://gymmanager-production-53e7.up.railway.app/alunos";

const studentForm = document.getElementById("studentForm");
const studentsTable = document.getElementById("studentsTable");
const searchStudent = document.getElementById("searchStudent");

let students = [];
let editingId = null;

// ===========================
// Inicialização
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    carregarAlunos();

});

// ===========================
// Pesquisa
// ===========================

searchStudent.addEventListener("input", () => {

    renderStudents(searchStudent.value);

});

// ===========================
// Buscar alunos da API
// ===========================

async function carregarAlunos() {

    try {

        const response = await fetch(API_URL);

        students = await response.json();

        renderStudents();

    } catch (error) {

        console.error(error);

        alert("Erro ao carregar alunos.");

    }

}

// ===========================
// Mostrar tabela
// ===========================

function renderStudents(filtro = "") {

    studentsTable.innerHTML = "";

    const lista = students.filter(aluno =>

        aluno.nome.toLowerCase().includes(filtro.toLowerCase()) ||

        aluno.cpf.toLowerCase().includes(filtro.toLowerCase()) ||

        aluno.email.toLowerCase().includes(filtro.toLowerCase())

    );

    lista.forEach(aluno => {

        studentsTable.innerHTML += `

        <tr>

            <td>${aluno.nome}</td>

            <td>${aluno.telefone}</td>

            <td>${aluno.objetivo}</td>

            <td>${aluno.status}</td>

<td>

    <button
        class="edit-btn"
        onclick="editarAluno(${aluno.id})">

        Editar

    </button>

    <button
        class="delete-btn"
        onclick="excluirAluno(${aluno.id})">

        Excluir

    </button>

</td>
            

        </tr>

        `;

    });

}

// ===========================
// Salvar aluno
// ===========================

studentForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const aluno = {

        nome: document.getElementById("nome").value,

        cpf: document.getElementById("cpf").value,

        telefone: document.getElementById("telefone").value,

        email: document.getElementById("email").value,

        peso: Number(document.getElementById("peso").value),

        altura: Number(document.getElementById("altura").value),

        objetivo: document.getElementById("objetivo").value,

        status: "Ativo"

    };

    try {

        if(editingId == null){

            await fetch(API_URL, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(aluno)

            });

        } else {

            await fetch(`${API_URL}/${editingId}`, {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(aluno)

            });

            editingId = null;

            studentForm.querySelector("button[type='submit']").textContent = "Salvar";

        }

        studentForm.reset();

        carregarAlunos();

    } catch(error){

        console.error(error);

        alert("Erro ao salvar aluno.");

    }

});

// ===========================
// Editar aluno
// ===========================

async function editarAluno(id) {

    try {

        const response = await fetch(`${API_URL}/${id}`);
        const aluno = await response.json();

        document.getElementById("nome").value = aluno.nome;
        document.getElementById("cpf").value = aluno.cpf;
        document.getElementById("telefone").value = aluno.telefone;
        document.getElementById("email").value = aluno.email;
        document.getElementById("peso").value = aluno.peso;
        document.getElementById("altura").value = aluno.altura;
        document.getElementById("objetivo").value = aluno.objetivo;

        editingId = aluno.id;

        studentForm.querySelector("button[type='submit']").textContent = "Atualizar";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } catch (error) {

        console.error(error);
        alert("Erro ao carregar aluno.");

    }

}

// ===========================
// Excluir aluno
// ===========================

async function excluirAluno(id) {

    if (!confirm("Deseja realmente excluir este aluno?")) {
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

// ===========================
// Atualizar lista automaticamente
// ===========================

window.editarAluno = editarAluno;
window.excluirAluno = excluirAluno;