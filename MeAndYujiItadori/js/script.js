document.body.classList.add("entrando");

window.addEventListener("load", () => {
    document.body.classList.remove("entrando");
});


// Mostrar página com fade quando carregar
window.addEventListener("load", () => {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
});


// Mostrar data atual (se existir o elemento)
const dataElemento = document.getElementById("data");

if (dataElemento) {
    const data = new Date();
    dataElemento.textContent =
    "Hoje é " + data.toLocaleDateString("pt-BR");
}


// Efeito de digitação no título (se existir h1)
const titulo = document.getElementById("titulo");

if (titulo) {

    const texto = "Bem-vindo ao sistema!";
    let i = 0;

    titulo.textContent = "";

    function escrever() {
        if (i < texto.length) {
            titulo.textContent += texto.charAt(i);
            i++;
            setTimeout(escrever, 60);
        }
    }

    escrever();
}


// Aplicar tema salvo em qualquer página
const botaoTema = document.getElementById("tema");

// Aplicar tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "light") {
    document.body.classList.add("light");
    if(botaoTema) botaoTema.textContent = "☽";
} else {
    if(botaoTema) botaoTema.textContent = "☼︎";
}


// Trocar tema
if (botaoTema) {

    botaoTema.addEventListener("click", () => {
        
        botaoTema.classList.add("animacao-tema");

        setTimeout(() => {
            botaoTema.classList.remove("animacao-tema");
        }, 300);


        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("tema", "light");
            botaoTema.textContent = "☽";

        } else {

            localStorage.setItem("tema", "dark");
            botaoTema.textContent = "☼︎";

        }

    });

}

// animação suave ao trocar de página
const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", function(e) {

        const destino = this.href;

        if(destino.startsWith("#") || this.target === "_blank") return;

        e.preventDefault();

        document.body.classList.add("saindo");

        setTimeout(() => {
            window.location.href = destino;
        }, 350);

    });

});

const canvas = document.getElementById("particulas");

if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particulas = [];

    for (let i = 0; i < 60; i++) {
        particulas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speedY: Math.random() * 0.5 + 0.2
        });
    }

    function animarParticulas() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(229,9,20,0.8)";

        particulas.forEach(p => {

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            p.y += p.speedY;

            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }

        });

        requestAnimationFrame(animarParticulas);
    }

    animarParticulas();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function toggleMenu(){

const menu = document.getElementById("listaPersonagens")

if(menu.style.display === "flex"){
menu.style.display = "none"
}else{
menu.style.display = "flex"
}

}

const filtroCategoria = document.getElementById("filtroCategoria");
const listaPersonagens = document.getElementById("listaPersonagens");

function aplicarFiltroCategorias() {
    if (!filtroCategoria || !listaPersonagens) return;

    const categoriaSelecionada = filtroCategoria.value;
    const itens = listaPersonagens.querySelectorAll("a");

    itens.forEach(item => {
        const categoriaItem = item.dataset.categoria || "todos";
        const deveMostrar = categoriaSelecionada === "todos" || categoriaItem === categoriaSelecionada;
        item.style.display = deveMostrar ? "flex" : "none";
    });

    listaPersonagens.style.display = "flex";
}

if (filtroCategoria) {
    filtroCategoria.addEventListener("change", aplicarFiltroCategorias);
    aplicarFiltroCategorias();
}

function criarBarraDeProgresso() {
    const caminhoAtual = window.location.pathname.replace(/\\/g, "/");

    const sequencias = [
        {
            nome: "Jornada do Itadori",
            paginas: ["/pages/pg1.html", "/pages/pg2.html", "/pages/pg3.html", "/pages/pg4.html", "/pages/pg5.html"]
        },
        {
            nome: "Arco do Gojo",
            paginas: [
                "/pagesGojo/pg1.html",
                "/pagesGojo/pg2.html",
                "/pagesGojo/pg3.html",
                "/pagesGojo/infinito.html",
                "/pagesGojo/azul.html",
                "/pagesGojo/vermelho.html",
                "/pagesGojo/roxo.html",
                "/pagesGojo/seis-olhos.html"
            ]
        },
        {
            nome: "Arco do Megumi",
            paginas: [
                "/pagesMegumi/pg1.html",
                "/pagesMegumi/pg2.html",
                "/pagesMegumi/pg3.html",
                "/pagesMegumi/lobo.html",
                "/pagesMegumi/nue.html",
                "/pagesMegumi/sapo.html",
                "/pagesMegumi/elefante.html",
                "/pagesMegumi/mahoraga.html"
            ]
        },
        {
            nome: "Arco da Nobara",
            paginas: ["/pagesNobara/pg1.html", "/pagesNobara/pg2.html", "/pagesNobara/pg3.html"]
        },
        {
            nome: "Arco do Kenjaku",
            paginas: ["/pagesKenjaku/pg1.html"]
        }
    ];

    const sequenciaAtual = sequencias.find(sequencia =>
        sequencia.paginas.some(pagina => caminhoAtual.endsWith(pagina))
    );

    if (!sequenciaAtual) return;

    const paginaAtual = sequenciaAtual.paginas.findIndex(pagina => caminhoAtual.endsWith(pagina));

    if (paginaAtual === -1) return;

    const progressoPercentual = ((paginaAtual + 1) / sequenciaAtual.paginas.length) * 100;

    const barra = document.createElement("section");
    barra.className = "barra-progresso";
    barra.setAttribute("aria-label", "Barra de progresso da seção");
    barra.innerHTML = `
        <div class="barra-progresso-topo">
            <span>${sequenciaAtual.nome}</span>
            <strong>${paginaAtual + 1}/${sequenciaAtual.paginas.length}</strong>
        </div>
        <div class="barra-progresso-trilha">
            <div class="barra-progresso-preenchimento" style="width: ${progressoPercentual}%;"></div>
        </div>
    `;

    const primeiroContainer = document.querySelector(".container");

    if (primeiroContainer && primeiroContainer.parentNode) {
        primeiroContainer.parentNode.insertBefore(barra, primeiroContainer);
        return;
    }

    document.body.appendChild(barra);
}

criarBarraDeProgresso();

const dadosComparador = {
    gojo: {
        nome: "Satoru Gojo",
        imagem: "../images/gojo.jpg",
        categoria: "Sensei",
        destaque: "Poder absurdo e presenca dominante.",
        estilo: "Confiante, provocador e sempre no controle.",
        tecnica: "Infinito, Azul, Vermelho, Roxo e Seis Olhos.",
        impacto: "Ele muda completamente o nivel de qualquer batalha."
    },
    megumi: {
        nome: "Megumi Fushiguro",
        imagem: "../images/megumi.jpg",
        categoria: "Aluno",
        destaque: "Estrategico e imprevisivel em combate.",
        estilo: "Mais serio, frio e muito inteligente nas decisoes.",
        tecnica: "Tecnica das Dez Sombras com varios shikigamis.",
        impacto: "Passa a sensacao de crescimento constante e grande potencial."
    },
    nobara: {
        nome: "Nobara Kugisaki",
        imagem: "../images/nobara.jpg",
        categoria: "Aluna",
        destaque: "Personalidade forte e atitude marcante.",
        estilo: "Direta, intensa e sem paciencia para falsidade.",
        tecnica: "Tecnicas com martelo, pregos e energia amaldicoada.",
        impacto: "Ela traz energia, firmeza e presenca propria para a historia."
    },
    kenjaku: {
        nome: "Kenjaku / Geto",
        imagem: "../images/kenjaku-icon.jpg",
        categoria: "Vilao",
        destaque: "Carisma perigoso e inteligencia ameacadora.",
        estilo: "Manipulador, frio e sempre varios passos a frente.",
        tecnica: "Controle narrativo, estrategia e grande presenca.",
        impacto: "Deixa a historia mais pesada e imprevisivel."
    },
    itadori: {
        nome: "Yuji Itadori",
        imagem: "../images/Itadori1.jpg",
        categoria: "Protagonista",
        destaque: "Forca fisica, bondade e determinacao.",
        estilo: "Humano, emotivo e sempre disposto a proteger.",
        tecnica: "Combate direto, resistencia alta e impulso heroico.",
        impacto: "Conecta o emocional da historia com as lutas mais intensas."
    }
};

function iniciarComparador() {
    const selectA = document.getElementById("personagemA");
    const selectB = document.getElementById("personagemB");
    const resultado = document.getElementById("comparadorResultado");

    if (!selectA || !selectB || !resultado) return;

    const personagens = Object.entries(dadosComparador);

    function preencherSelect(select, valorInicial) {
        select.innerHTML = personagens.map(([id, personagem]) => `
            <option value="${id}" ${id === valorInicial ? "selected" : ""}>${personagem.nome}</option>
        `).join("");
    }

    function criarCardComparador(personagem) {
        return `
            <article class="comparador-personagem">
                <img src="${personagem.imagem}" alt="${personagem.nome}" class="comparador-imagem">
                <h2>${personagem.nome}</h2>
                <div class="comparador-tags">
                    <span>${personagem.categoria}</span>
                </div>
                <div class="comparador-linhas">
                    <div class="comparador-linha">
                        <strong>Destaque</strong>
                        <p>${personagem.destaque}</p>
                    </div>
                    <div class="comparador-linha">
                        <strong>Estilo</strong>
                        <p>${personagem.estilo}</p>
                    </div>
                    <div class="comparador-linha">
                        <strong>Tecnica</strong>
                        <p>${personagem.tecnica}</p>
                    </div>
                    <div class="comparador-linha">
                        <strong>Impacto</strong>
                        <p>${personagem.impacto}</p>
                    </div>
                </div>
            </article>
        `;
    }

    function renderizarComparador() {
        const personagemA = dadosComparador[selectA.value];
        const personagemB = dadosComparador[selectB.value];

        resultado.innerHTML = `
            <div class="comparador-coluna">
                ${criarCardComparador(personagemA)}
            </div>
            <div class="comparador-coluna">
                ${criarCardComparador(personagemB)}
            </div>
            <div class="comparador-acoes-centrais">
                <a href="../index.html" class="botao-nav">Inicio</a>
                <a href="personagens.html" class="botao-nav">Personagens</a>
            </div>
        `;
    }

    preencherSelect(selectA, "gojo");
    preencherSelect(selectB, "megumi");
    renderizarComparador();

    selectA.addEventListener("change", renderizarComparador);
    selectB.addEventListener("change", renderizarComparador);
}

iniciarComparador();

function mostrarInfo(tipo){
    let texto = ""

    if(tipo === "cachorro"){
        texto = "Os cães divinos ajudam Megumi a rastrear maldições."
    }

    if(tipo === "nue"){
        texto = "Nue é uma criatura elétrica usada para ataques rápidos."
    }

    if(tipo === "sapo"){
        texto = "Os sapos ajudam a capturar inimigos."
    }

    document.getElementById("info").innerText = texto
}
