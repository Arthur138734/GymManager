// ========================================
// GymManager - Pagamentos
// ========================================

// Formulário
const paymentForm = document.getElementById("paymentForm");

// Select de alunos
const alunoSelect = document.getElementById("aluno");

// Tabela
const paymentsTable = document.getElementById("paymentsTable");

// Dados
let payments = JSON.parse(localStorage.getItem("payments")) || [];

let students = JSON.parse(localStorage.getItem("students")) || [];

let editingId = null;

// Inicialização
loadStudents();

renderPayments();

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

paymentForm.addEventListener("submit", function(event){

    event.preventDefault();

    const payment = {

        id: Date.now(),

        aluno: alunoSelect.value,

        valor: Number(document.getElementById("valor").value),

        vencimento: document.getElementById("vencimento").value,

        formaPagamento: document.getElementById("formaPagamento").value,

        status: document.getElementById("status").value

    };

    if(editingId === null){

        payments.push(payment);

    }else{

        const index = payments.findIndex(payment => payment.id === editingId);

        payment.id = editingId;

        payments[index] = payment;

        editingId = null;

        paymentForm.querySelector("button[type='submit']").textContent = "Salvar";

    }

    savePayments();

    renderPayments();

    paymentForm.reset();

});

function savePayments(){

    localStorage.setItem("payments", JSON.stringify(payments));

}

function renderPayments(){

    paymentsTable.innerHTML = "";

    payments.forEach(payment=>{

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${payment.aluno}</td>

            <td>R$ ${payment.valor.toFixed(2)}</td>

            <td>${payment.vencimento}</td>

            <td>${payment.status}</td>

            <td>

                <button
                    class="edit-btn"
                    data-id="${payment.id}">

                    Editar

                </button>

                <button
                    class="delete-btn"
                    data-id="${payment.id}">

                    Excluir

                </button>

            </td>

        `;

        paymentsTable.appendChild(row);

    });

}

paymentsTable.addEventListener("click", function(event){

    const button = event.target;

    const id = Number(button.dataset.id);

    if(button.classList.contains("delete-btn")){

        deletePayment(id);

    }

    if(button.classList.contains("edit-btn")){

        editPayment(id);

    }

});

function deletePayment(id){

    if(!confirm("Deseja excluir este pagamento?")){

        return;

    }

    payments = payments.filter(payment => payment.id !== id);

    savePayments();

    renderPayments();

}

function editPayment(id){

    const payment = payments.find(payment => payment.id === id);

    if(!payment){

        return;

    }

    alunoSelect.value = payment.aluno;

    document.getElementById("valor").value = payment.valor;

    document.getElementById("vencimento").value = payment.vencimento;

    document.getElementById("formaPagamento").value = payment.formaPagamento;

    document.getElementById("status").value = payment.status;

    editingId = id;

    paymentForm.querySelector("button[type='submit']").textContent = "Atualizar";

}