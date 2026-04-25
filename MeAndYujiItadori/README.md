# 𖦹 Jujutsu Kaisen Mini Site

Um mini site responsivo inspirado no anime **Jujutsu Kaisen**, desenvolvido com **HTML, CSS e JavaScript puro**.
O projeto apresenta algumas páginas informativas sobre o personagem **Yuji Itadori** e uma recomendação final sobre assistir o anime.

O objetivo do projeto foi **praticar estruturação de páginas web, estilização com CSS e responsividade para dispositivos móveis**.

---

# 𖦹 Preview

O site possui um layout escuro com destaque em **vermelho neon**, inspirado na estética do anime.

Principais elementos visuais:

* Fundo com **efeito de partículas em canvas**
* Cards com **bordas e glow vermelho**
* Layout **responsivo para celular**
* Navegação entre páginas
* Banner de imagem do anime
* Botões estilizados

---

# 𖦹 Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* **Canvas API** (efeito de partículas)

---

# 𖦹 Estrutura do projeto

```
jujutsu-kaisen-mini-site
│
├── index.html
│
├── pages
│   ├── pg2.html
│   ├── pg3.html
│   ├── pg4.html
│   └── pg5.html
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
└── images
    ├── itadori1.jpg
    ├── jujutsukaisen.jpg
    └── outras imagens usadas no site
```

---

# 𖦹 Estrutura das páginas

Cada página segue uma estrutura base semelhante:

```
body
 ├── canvas (efeito de partículas)
 └── container
      ├── imagem / avatar / banner
      ├── card
      │    ├── título
      │    ├── texto
      │    └── footer (autoria)
      └── botões de navegação
```

---

# 𖦹 Estilização (CSS)

O arquivo **style.css** centraliza toda a aparência do site.

Principais elementos estilizados:

### Layout principal

* `.container` → estrutura central da página
* `.card` → caixa principal de conteúdo
* `.banner-anime` → imagem do topo na página final

### Componentes

* `.botao-nav` → botões de navegação
* `.rodape` → autoria do projeto
* `#titulo-pg5` → título personalizado da última página

### Estilo visual

* fundo preto
* bordas vermelhas
* **box-shadow neon**
* bordas arredondadas
* layout centralizado

---

# 𖦹 Responsividade

O site foi ajustado para funcionar bem em **celulares**, utilizando:

* `meta viewport`
* `flexbox`
* ajustes de `font-size`
* margens adaptadas para telas menores

---

# 𖦹 JavaScript

O arquivo **script.js** é responsável pelo efeito visual de **partículas no fundo da página**.

Ele utiliza um elemento:

```
<canvas id="particulas"></canvas>
```

para gerar pequenos pontos animados no fundo da tela.

---

# 𖦹 Página final

A **pg5.html** funciona como uma página de conclusão do site, contendo:

* banner do anime
* título de recomendação
* texto explicativo
* autoria
* botão para ver o trailer
* botão para voltar para a página anterior

---

# 𖦹 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de:

* praticar **HTML semântico**
* aprender **CSS layout e design**
* aplicar **responsividade**
* usar **JavaScript para efeitos visuais**
* organizar um pequeno projeto web em pastas

---

# 𖦹 Possíveis melhorias futuras

* adicionar animações de hover nos botões
* incluir mais páginas sobre personagens
* criar menu de navegação
* melhorar a acessibilidade
* adicionar mais efeitos visuais

---

# 𖦹 Autor

Desenvolvido por **Flaviano**

Projeto criado para prática de desenvolvimento web.
