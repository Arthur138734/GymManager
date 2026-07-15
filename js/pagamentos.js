// ========================================
// GymManager - Pagamentos
// ========================================

// APIs
const API_PAGAMENTOS = "https://gymmanager-production-53e7.up.railway.app/pagamentos";
const API_ALUNOS = "https://gymmanager-production-53e7.up.railway.app/alunos";

// Formulário
const paymentForm = document.getElementById("paymentForm");

// Select de alunos
const alunoSelect = document.getElementById("aluno");

// Tabela
const paymentsTable = document.getElementById("paymentsTable");

let payments = [];

let editingId = null;

// ========================================
// Carregar Alunos
// ========================================

async function loadStudents() {

    try {

        const response = await fetch(API_ALUNOS);

        const alunos = await response.json();

        alunoSelect.innerHTML =
            '<option value="">Selecione um aluno</option>';

        alunos.forEach(aluno => {

            alunoSelect.innerHTML += `
                <option value="${aluno.nome}">
                    ${aluno.nome}
                </option>
            `;

        });

    } catch (error) {

        console.error(error);

        alert("Erro ao carregar alunos.");

    }

}

// ========================================
// Carregar Pagamentos
// ========================================

async function loadPayments() {

    try {

        const response = await fetch(API_PAGAMENTOS);

        payments = await response.json();

        renderPayments();

    } catch (error) {

        console.error(error);

        alert("Erro ao carregar pagamentos.");

    }

}

// ========================================
// Renderizar
// ========================================

function renderPayments() {

    paymentsTable.innerHTML = "";

    payments.forEach(payment => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${payment.aluno}</td>

            <td>R$ ${Number(payment.valor).toFixed(2)}</td>

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

// ========================================
// Salvar
// ========================================

paymentForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const payment = {

        aluno: alunoSelect.value,

        valor: Number(document.getElementById("valor").value),

        vencimento: document.getElementById("vencimento").value,

        formaPagamento: document.getElementById("formaPagamento").value,

        status: document.getElementById("status").value

    };

    try {

        if (editingId == null) {

            await fetch(API_PAGAMENTOS, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(payment)

            });

            alert("Pagamento cadastrado!");

        } else {

            await fetch(`${API_PAGAMENTOS}/${editingId}`, {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(payment)

            });

            alert("Pagamento atualizado!");

            editingId = null;

            paymentForm.querySelector("button[type='submit']").textContent = "Salvar";

        }

        paymentForm.reset();

        loadPayments();

    } catch (error) {

        console.error(error);

        alert("Erro ao salvar pagamento.");

    }

});

// ========================================
// Excluir / Editar
// ========================================

paymentsTable.addEventListener("click", function (event) {

    const button = event.target;

    const id = Number(button.dataset.id);

    if (button.classList.contains("delete-btn")) {

        deletePayment(id);

    }

    if (button.classList.contains("edit-btn")) {

        editPayment(id);

    }

});

// ========================================
// Excluir
// ========================================

async function deletePayment(id) {

    if (!confirm("Deseja excluir este pagamento?")) {

        return;

    }

    try {

        await fetch(`${API_PAGAMENTOS}/${id}`, {

            method: "DELETE"

        });

        loadPayments();

    } catch (error) {

        console.error(error);

        alert("Erro ao excluir pagamento.");

    }

}

// ========================================
// Editar
// ========================================

function editPayment(id) {

    const payment = payments.find(p => p.id === id);

    if (!payment) {

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

// ========================================
// Inicialização
// ========================================

loadStudents();

loadPayments();