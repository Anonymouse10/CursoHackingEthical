// Função para rolar suavemente até uma seção
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quiz-form");
    const submitButton = document.getElementById("submit-btn");
    const resultDiv = document.getElementById("result");

    // Verifica se todas as perguntas foram respondidas
    form.addEventListener("change", function () {
        const allAnswered = [...form.querySelectorAll(".question")].every(question => {
            return [...question.querySelectorAll("input")].some(input => input.checked);
        });
        submitButton.disabled = !allAnswered;
    });

    // Lida com o envio do formulário
    submitButton.addEventListener("click", function () {
        const answers = form.querySelectorAll("input:checked");
        let correctAnswers = 0;

        answers.forEach(answer => {
            if (answer.value === "correct") {
                correctAnswers++;
            }
        });

        const totalQuestions = form.querySelectorAll(".question").length;
        const score = (correctAnswers / totalQuestions) * 100;

        // Exibe o resultado
        resultDiv.innerHTML = `<h2>Você acertou ${correctAnswers} de ${totalQuestions} perguntas (${score.toFixed(0)}%)</h2>`;
        if (score === 100) {
            resultDiv.innerHTML += "<p>Parabéns! Você concluiu o curso com sucesso!</p>";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Lida com o comportamento do acordeão
    const accordionToggles = document.querySelectorAll(".accordion-toggle");

    accordionToggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === "block";

            // Fecha todos os conteúdos
            document.querySelectorAll(".accordion-content").forEach(item => {
                item.style.display = "none";
            });

            // Abre o conteúdo clicado, se estava fechado
            if (!isOpen) {
                content.style.display = "block";
            }
        });
    });

    // Código do questionário (permanece o mesmo da versão anterior)
});
