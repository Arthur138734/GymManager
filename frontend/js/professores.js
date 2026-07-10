// ===============================
// GymManager - Professores
// ===============================

// Formulário
const teacherForm = document.getElementById("teacherForm");

// Tabela
const teachersTable = document.getElementById("teachersTable");

// Pesquisa
const searchTeacher = document.getElementById("searchTeacher");

// Lista
let teachers = JSON.parse(localStorage.getItem("teachers")) || [];

let editingId = null;

// Inicialização
renderTeachers();

// Pesquisa
searchTeacher.addEventListener("input", function () {
    renderTeachers(searchTeacher.value);
});

// Cadastro
teacherForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const teacher = {

        id: Date.now(),

        nome: document.getElementById("nome").value,

        cpf: document.getElementById("cpf").value,

        telefone: document.getElementById("telefone").value,

        email: document.getElementById("email").value,

        especialidade: document.getElementById("especialidade").value,

        cref: document.getElementById("cref").value,

        salario: document.getElementById("salario").value,

        status: document.getElementById("status").value

    };

    if(editingId === null){

        teachers.push(teacher);

    }else{

        const index = teachers.findIndex(t => t.id === editingId);

        teacher.id = editingId;

        teachers[index] = teacher;

        editingId = null;

        teacherForm.querySelector("button[type='submit']").textContent = "Salvar";

    }

    saveTeachers();

    renderTeachers();

    teacherForm.reset();

});

function saveTeachers(){

    localStorage.setItem("teachers", JSON.stringify(teachers));

}

function renderTeachers(search = ""){

    teachersTable.innerHTML = "";

    const filtered = teachers.filter(teacher =>

        teacher.nome
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    filtered.forEach(teacher => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${teacher.nome}</td>

            <td>${teacher.especialidade}</td>

            <td>${teacher.cref}</td>

            <td>${teacher.status}</td>

            <td>

                <button
                    class="edit-btn"
                    data-id="${teacher.id}">

                    Editar

                </button>

                <button
                    class="delete-btn"
                    data-id="${teacher.id}">

                    Excluir

                </button>

            </td>

        `;

        teachersTable.appendChild(row);

    });

}

teachersTable.addEventListener("click", function(event){

    const button = event.target;

    const id = Number(button.dataset.id);

    if(button.classList.contains("delete-btn")){

        deleteTeacher(id);

    }

    if(button.classList.contains("edit-btn")){

        editTeacher(id);

    }

});

function deleteTeacher(id){

    if(!confirm("Deseja excluir este professor?")){

        return;

    }

    teachers = teachers.filter(teacher => teacher.id !== id);

    saveTeachers();

    renderTeachers();

}

function editTeacher(id){

    const teacher = teachers.find(teacher => teacher.id === id);

    if(!teacher){

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

    editingId = id;

    teacherForm.querySelector("button[type='submit']").textContent = "Atualizar";

}