// ====================================
// Dashboard GymManager
// ====================================

loadDashboard();

function loadDashboard(){

    const students =
        JSON.parse(localStorage.getItem("students")) || [];

    const teachers =
        JSON.parse(localStorage.getItem("teachers")) || [];

    const trainings =
        JSON.parse(localStorage.getItem("trainings")) || [];

    const payments =
        JSON.parse(localStorage.getItem("payments")) || [];

    document.getElementById("totalAlunos").textContent =
        students.length;

    document.getElementById("totalProfessores").textContent =
        teachers.length;

    document.getElementById("totalTreinos").textContent =
        trainings.length;

    const pagos =
        payments.filter(payment =>
            payment.status === "Pago"
        );

    const pendentes =
        payments.filter(payment =>
            payment.status === "Pendente"
        );

    const receita = pagos.reduce(

        (total, payment) => total + payment.valor,

        0

    );

    document.getElementById("receitaTotal").textContent =
        receita.toLocaleString("pt-BR", {

            style:"currency",

            currency:"BRL"

        });

    document.getElementById("pagamentosPendentes").textContent =
        pendentes.length;

    document.getElementById("pagamentosPagos").textContent =
        pagos.length;

}