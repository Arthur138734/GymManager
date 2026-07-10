// ========================================
// GymManager - Treinos
// ========================================

// Formulário
const trainingForm = document.getElementById("trainingForm");

// Selects
const alunoSelect = document.getElementById("aluno");
const professorSelect = document.getElementById("professor");

// Tabela
const trainingTable = document.getElementById("trainingTable");

// Dados
let trainings = JSON.parse(localStorage.getItem("trainings")) || [];

let students = JSON.parse(localStorage.getItem("students")) || [];

let teachers = JSON.parse(localStorage.getItem("teachers")) || [];

let editingId = null;

// Inicialização
loadStudents();

loadTeachers();

renderTrainings();

function loadStudents(){

    alunoSelect.innerHTML = `
        <option value="">Selecione um aluno</option>
    `;

    students.forEach(student=>{

        alunoSelect.innerHTML += `
            <option value="${student.nome}">
                ${student.nome}
            </option>
        `;

    });

}

function loadTeachers(){

    professorSelect.innerHTML = `
        <option value="">Selecione um professor</option>
    `;

    teachers.forEach(teacher=>{

        professorSelect.innerHTML += `
            <option value="${teacher.nome}">
                ${teacher.nome}
            </option>
        `;

    });

}

trainingForm.addEventListener("submit", function(event){

    event.preventDefault();

    const training = {

        id: Date.now(),

        aluno: alunoSelect.value,

        professor: professorSelect.value,

        nomeTreino: document.getElementById("nomeTreino").value,

        exercicio: document.getElementById("exercicio").value,

        series: document.getElementById("series").value,

        repeticoes: document.getElementById("repeticoes").value,

        descanso: document.getElementById("descanso").value,

        observacoes: document.getElementById("observacoes").value

    };

    trainings.push(training);

    localStorage.setItem("trainings", JSON.stringify(trainings));

    renderTrainings();

    trainingForm.reset();

});

function renderTrainings(){

    trainingTable.innerHTML = "";

    trainings.forEach(training => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${training.aluno}</td>

            <td>${training.professor}</td>

            <td>${training.nomeTreino}</td>

            <td>${training.exercicio}</td>

            <td>

                <button>Editar</button>

                <button>Excluir</button>

            </td>

        `;

        trainingTable.appendChild(row);

    });

}