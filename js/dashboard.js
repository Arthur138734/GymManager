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

// ===========================
// GRÁFICO DE OBJETIVOS
// ===========================

function carregarGraficoObjetivos() {

    const alunos = JSON.parse(localStorage.getItem("students")) || [];

    let hipertrofia = 0;
    let emagrecimento = 0;
    let condicionamento = 0;
    let reabilitacao = 0;

    alunos.forEach(aluno => {

        switch (aluno.objetivo) {

            case "Hipertrofia":
                hipertrofia++;
                break;

            case "Emagrecimento":
                emagrecimento++;
                break;

            case "Condicionamento":
                condicionamento++;
                break;

            case "Reabilitação":
                reabilitacao++;
                break;

        }

    });

    new Chart(document.getElementById("graficoObjetivos"), {

        type: "pie",

        data: {

            labels: [
                "Hipertrofia",
                "Emagrecimento",
                "Condicionamento",
                "Reabilitação"
            ],

            datasets: [{

                data: [
                    hipertrofia,
                    emagrecimento,
                    condicionamento,
                    reabilitacao
                ]

            }]

        }

    });

}

// ===========================
// GRÁFICO PAGAMENTOS
// ===========================

async function criarGraficoReceita(){

    const response = await fetch(API_PAGAMENTOS);

    const pagamentos = await response.json();

    const meses = [

        "Jan","Fev","Mar","Abr","Mai","Jun",

        "Jul","Ago","Set","Out","Nov","Dez"

    ];

    const receitas = new Array(12).fill(0);

    pagamentos.forEach(pagamento=>{

        if(pagamento.status !== "Pago") return;

        const data = new Date(pagamento.vencimento);

        const mes = data.getMonth();

        receitas[mes] += pagamento.valor;

    });

    new Chart(document.getElementById("receitaChart"),{

        type:"bar",

        data:{

            labels:meses,

            datasets:[{

                label:"Receita (R$)",

                data:receitas,

                borderWidth:1

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{

                    display:false

                }

            }

        }

    });

}

function carregarGraficoPagamentos() {

    const pagamentos = JSON.parse(localStorage.getItem("payments")) || [];

    let pagos = 0;
    let pendentes = 0;

    pagamentos.forEach(p => {

        if (p.status === "Pago") {

            pagos++;

        } else {

            pendentes++;

        }

    });

    new Chart(document.getElementById("graficoPagamentos"), {

        type: "doughnut",

        data: {

            labels: [
                "Pagos",
                "Pendentes"
            ],

            datasets: [{

                data: [
                    pagos,
                    pendentes
                ]

            }]

        }

    });

}

carregarGraficoObjetivos();
carregarGraficoPagamentos();
criarGraficoReceita();

async function criarGraficoObjetivos() {

    const response = await fetch(API_ALUNOS);

    const alunos = await response.json();

    let hipertrofia = 0;
    let emagrecimento = 0;
    let condicionamento = 0;
    let reabilitacao = 0;

    alunos.forEach(aluno => {

        switch (aluno.objetivo) {

            case "Hipertrofia":
                hipertrofia++;
                break;

            case "Emagrecimento":
                emagrecimento++;
                break;

            case "Condicionamento":
                condicionamento++;
                break;

            case "Reabilitação":
                reabilitacao++;
                break;

        }

    });

    new Chart(document.getElementById("objetivoChart"), {

        type: "doughnut",

        data: {

            labels: [

                "Hipertrofia",
                "Emagrecimento",
                "Condicionamento",
                "Reabilitação"

            ],

            datasets: [{

                data: [

                    hipertrofia,
                    emagrecimento,
                    condicionamento,
                    reabilitacao

                ]

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}

criarGraficoReceita();
criarGraficoObjetivos();