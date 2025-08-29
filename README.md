# Loja Multistyles 🛍️

Este repositório contém **a mesma tela de loja** implementada em **4 versões diferentes**, cada uma usando uma técnica distinta de estilização no React:

1. **CSS Global** → [`01-css-global/`](./01-css-global)
2. **CSS Modules** → [`02-css-modules/`](./02-css-modules)
3. **Tailwind CSS** → [`03-tailwind/`](./03-tailwind)
4. **styled-components** → [`04-styled-components/`](./04-styled-components)

---

## Objetivo
Praticar e comparar diferentes formas de estilização em React, mantendo a **mesma UI/UX** e critérios de acessibilidade, responsividade e dark mode.

---

## Estrutura dos componentes
Cada versão contém:
- `Navbar` (logo, toggle de tema, badge do carrinho)
- `ProductCard` (imagem, título, preço, rating, tag, botão)
- `Button` (variações: solid / outline / ghost)
- `Skeleton` (loading state)

---

## Funcionalidades obrigatórias
- Dark/Light mode com **persistência**  
- Grid responsivo (1, 2, 3, 4 colunas conforme breakpoints)  
- Foco visível e navegação por teclado  
- Acessibilidade (`aria-*`, contraste ≥ 4.5:1)  
- Skeleton sem layout shift  
- Animações suaves (150–250ms)

---

## Como rodar cada versão
Entre na pasta desejada e rode:

```bash
npm install
npm run dev
Exemplo:

bash
Copiar código
cd 01-css-global
npm install
npm run dev

Organização
csharp
Copiar código
loja-multistyles/
│ README.md
│ .gitignore
│
├── 01-css-global/
├── 02-css-modules/
├── 03-tailwind/
└── 04-styled-components/

Créditos
Projeto feito para estudo por Lucas Bagolin.