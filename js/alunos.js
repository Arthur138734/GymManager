// ===============================
// GymManager - Cadastro de Alunos
// ===============================

// URL da API
const API_URL = "https://gymmanager-production-53e7.up.railway.app/alunos";

// Elementos
const studentForm = document.getElementById("studentForm");
const studentsTable = document.getElementById("studentsTable");
const searchStudent = document.getElementById("searchStudent");
const searchStudent = document.getElementById("searchStudent");

searchStudent.addEventListener("input", () => {

    listarAlunos(searchStudent.value);

});

// Lista de alunos
let students = [];
let editingId = null;

async function listarAlunos(filtro = "") {

    const response = await fetch(API_ALUNOS);

    const alunos = await response.json();

    const filtrados = alunos.filter(aluno =>

        aluno.nome.toLowerCase().includes(filtro.toLowerCase()) ||

        aluno.cpf.toLowerCase().includes(filtro.toLowerCase()) ||

        aluno.email.toLowerCase().includes(filtro.toLowerCase())

    );

    studentsTable.innerHTML = "";

    filtrados.forEach(aluno => {

        studentsTable.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.telefone}</td>
                <td>${aluno.objetivo}</td>
                <td>Ativo</td>
                <td>
                    <button onclick="editar(${aluno.id})">Editar</button>
                    <button onclick="excluir(${aluno.id})">Excluir</button>
                </td>
            </tr>
        `;

    });

}

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

const API_PESQUISA =
    "https://gymmanager-production-53e7.up.railway.app/alunos/pesquisar";

    const campoPesquisa = document.getElementById("searchStudent");

    campoPesquisa.addEventListener("input", pesquisarAluno);

    async function pesquisarAluno(){

        const nome = campoPesquisa.value.trim();

            if(nome === ""){

                    listarAlunos();

                            return;

                                }

                                    const response = await fetch(`${API_PESQUISA}?nome=${encodeURIComponent(nome)}`);

                                        const alunos = await response.json();

                                            renderizarTabela(alunos);

                                            }

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