// ===============================
// GymManager - Dashboard
// ===============================

// URLs da API

const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!usuario) {

    alert("Faça login para acessar o sistema.");

        window.location.href = "login.html";

        }

        document.getElementById("nomeUsuario").textContent = usuario.nome;

const API_ALUNOS = "https://gymmanager-production-53e7.up.railway.app/alunos";
const API_PROFESSORES = "https://gymmanager-production-53e7.up.railway.app/professores";
const API_TREINOS = "https://gymmanager-production-53e7.up.railway.app/treinos";
const API_PAGAMENTOS = "https://gymmanager-production-53e7.up.railway.app/pagamentos";

async function carregarDashboard() {

    try {

        const [
            alunosRes,
            professoresRes,
            treinosRes,
            pagamentosRes
        ] = await Promise.all([
            fetch(API_ALUNOS),
            fetch(API_PROFESSORES),
            fetch(API_TREINOS),
            fetch(API_PAGAMENTOS)
        ]);

        if (!alunosRes.ok) throw new Error("Erro ao carregar alunos.");
        if (!professoresRes.ok) throw new Error("Erro ao carregar professores.");
        if (!treinosRes.ok) throw new Error("Erro ao carregar treinos.");
        if (!pagamentosRes.ok) throw new Error("Erro ao carregar pagamentos.");

        const alunos = await alunosRes.json();
        const professores = await professoresRes.json();
        const treinos = await treinosRes.json();
        const pagamentos = await pagamentosRes.json();

        // Cards
        document.getElementById("totalAlunos").textContent = alunos.length;
        document.getElementById("totalProfessores").textContent = professores.length;
        document.getElementById("totalTreinos").textContent = treinos.length;

        let receita = 0;
        let pendentes = 0;
        let pagos = 0;

        pagamentos.forEach(pagamento => {

            if (pagamento.status === "Pago") {
                receita += Number(pagamento.valor);
                pagos++;
            }

            if (pagamento.status === "Pendente") {
                pendentes++;
            }

        });

        document.getElementById("receitaTotal").textContent =
            "R$ " + receita.toFixed(2);

        document.getElementById("pagamentosPendentes").textContent =
            pendentes;

        document.getElementById("pagamentosPagos").textContent =
            pagos;

    } catch (error) {

        console.error(error);
        alert(error.message);

    }

}

carregarDashboard();

document.getElementById("logout").addEventListener("click", function (event) {

    event.preventDefault();

    localStorage.removeItem("usuario");

    window.location.href = "login.html";

});