/\*\*

*   Agro Forte, Futuro Sustentável - script.js
*   Funcionalidades interativas para a página  
    \*/

document.addEventListener("DOMContentLoaded", () => {  
inicializarRolagemSuave();  
inicializarBotaoDestaque();  
inicializarCalculadora();  
inicializarQuiz();  
inicializarFormulario();  
});

/\*\*

*   1.  ROLAGEM SUAVE DO MENU
*   Faz a página rolar suavemente até a seção ao clicar nos links de navegação.  
    \*/  
    function inicializarRolagemSuave() {  
    const linksMenu = document.querySelectorAll("nav a");linksMenu.forEach(link => {  
    link.addEventListener("click", (evento) => {  
    evento.preventDefault();  
    const idAlvo = link.getAttribute("href");  
    const elementoAlvo = document.querySelector(idAlvo);if (elementoAlvo) {  
    elementoAlvo.scrollIntoView({  
    behavior: "smooth",  
    block: "start"  
    });  
    }  
    });  
    });  
    }

/\*\*

*   2.  BOTÃO DESTAQUE ("Entenda o Equilíbrio")
*   Rola o usuário direto para a seção de sustentabilidade.  
    \*/  
    function inicializarBotaoDestaque() {  
    const botaoEntenda = document.querySelector("#inicio button");  
    if (botaoEntenda) {  
    botaoEntenda.addEventListener("click", () => {  
    const secaoSustentabilidade = document.querySelector("#sustentabilidade");  
    if (secaoSustentabilidade) {  
    secaoSustentabilidade.scrollIntoView({ behavior: "smooth" });  
    }  
    });  
    }  
    }

/\*\*

*   3.  CALCULADORA DE IMPACTO AMBIENTAL
*   Simula a economia de água ao trocar a irrigação comum pela inteligente.  
    \*/  
    function inicializarCalculadora() {  
    const artigoCalc = document.querySelector("#interatividade article:nth-of-type(1)");  
    const botaoAbrir = artigoCalc.querySelector("button");// Cria a estrutura interna da calculadora dinamicamente  
    const containerCalc = document.createElement("div");  
    containerCalc.style.marginTop = "15px";  
    containerCalc.style.display = "none";  
    containerCalc.innerHTML = `<label for="hectares">Tamanho da plantação (em Hectares):</label><br> <input type="number" id="hectares" min="1" placeholder="Ex: 50" style="padding: 5px; margin: 5px 0;"><br> <button type="button" id="btnCalcular" style="margin-top: 5px;">Calcular Economia</button> <p id="resultadoCalc" style="font-weight: bold; margin-top: 10px; color: green;"></p>`;  
    artigoCalc.appendChild(containerCalc);botaoAbrir.addEventListener("click", () => {  
    if (containerCalc.style.display === "none") {  
    containerCalc.style.display = "block";  
    botaoAbrir.textContent = "Fechar Calculadora";  
    } else {  
    containerCalc.style.display = "none";  
    botaoAbrir.textContent = "Abrir Calculadora";  
    }  
    });const btnCalcular = document.getElementById("btnCalcular");  
    btnCalcular.addEventListener("click", () => {  
    const hectares = parseFloat(document.getElementById("hectares").value);  
    if (isNaN(hectares) || hectares <= 0) {  
    alert("Por favor, digite um número de hectares válido.");  
    return;  
    }  
    // Cálculo fictício baseado em médias de economia por hectare da irrigação inteligente  
    const aguaEconomizada = hectares \* 12000;  
    document.getElementById("resultadoCalc").textContent =  
    `Adotando a irrigação inteligente, você economizaria aproximadamente ${aguaEconomizada.toLocaleString('pt-BR')} litros de água por mês!`;  
    });  
    }

/\*\*

*   4.  QUIZ INTERATIVO
*   Cria perguntas rápidas de múltipla escolha sobre o conteúdo da página.  
    \*/  
    function inicializarQuiz() {  
    const artigoQuiz = document.querySelector("#interatividade article:nth-of-type(2)");  
    const botaoComecar = artigoQuiz.querySelector("button");const containerQuiz = document.createElement("div");  
    containerQuiz.style.marginTop = "15px";  
    containerQuiz.style.display = "none";  
    containerQuiz.innerHTML = `<p><strong>Pergunta:</strong> Qual técnica de cultivo não revolve o solo e mantém a palhada para evitar erosões?</p> <input type="radio" id="op1" name="quiz" value="errado"> <label for="op1">Rotação de Culturas</label><br> <input type="radio" id="op2" name="quiz" value="certo"> <label for="op2">Sistema Plantio Direto (SPD)</label><br> <input type="radio" id="op3" name="quiz" value="errado"> <label for="op3">Agricultura de Precisão</label><br><br> <button type="button" id="btnResponder">Enviar Resposta</button> <p id="resultadoQuiz" style="font-weight: bold; margin-top: 10px;"></p>`;  
    artigoQuiz.appendChild(containerQuiz);botaoComecar.addEventListener("click", () => {  
    if (containerQuiz.style.display === "none") {  
    containerQuiz.style.display = "block";  
    botaoComecar.textContent = "Fechar Quiz";  
    } else {  
    containerQuiz.style.display = "none";  
    botaoComecar.textContent = "Começar Quiz";  
    }  
    });const btnResponder = document.getElementById("btnResponder");  
    btnResponder.addEventListener("click", () => {  
    const respostaSelecionada = document.querySelector('input\[name="quiz"\]:checked');  
    const campoResultado = document.getElementById("resultadoQuiz");if (!respostaSelecionada) {  
    alert("Escolha uma opção antes de enviar!");  
    return;  
    }if (respostaSelecionada.value === "certo") {  
    campoResultado.textContent = "Parabéns! Resposta Correta. O SPD protege o solo de forma sustentável. 🌱";  
    campoResultado.style.color = "green";  
    } else {  
    campoResultado.textContent = "Quase lá! Dica: releia a Seção 2 sobre Sustentabilidade no Campo e tente de novo.";  
    campoResultado.style.color = "red";  
    }  
    });  
    }

/\*\*

*   5.  VALIDAÇÃO DO FORMULÁRIO DE CONTATO
*   Captura o envio do formulário e exibe um alerta de sucesso personalizado.  
    \*/  
    function inicializarFormulario() {  
    const formulario = document.querySelector("form");  
    if (formulario) {  
    formulario.addEventListener("submit", (evento) => {  
    evento.preventDefault(); // Impede o recarregamento real da páginaconst nome = document.getElementById("nome").value;  
    const email = document.getElementById("email").value;if (nome.trim() === "" || email.trim() === "") {  
    alert("Por favor, preencha todos os campos obrigatórios.");  
    return;  
    }alert(`Obrigado pelo contato, ${nome}! Suas informações de conscientização foram registradas com sucesso. Juntos pelo futuro sustentável!`);  
    formulario.reset(); // Limpa os campos após o envio  
    });  
    }  
    }
