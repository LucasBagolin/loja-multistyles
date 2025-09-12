# Versão 03 – Tailwind CSS

Esta versão implementa a tela usando **Tailwind CSS**, com utilitários e tokens definidos no `tailwind.config.js`.

## Estrutura

- `src/`
  - `App.tsx` → junta Navbar, Grid e ProductCards
  - `components/` → `Navbar`, `ProductCard`, `Button`, `Skeleton`
  - `hooks/useTheme.ts` → alternância claro/escuro com persistência
  - `data/products.ts` → 6 produtos de exemplo
  - `types.ts` → tipagem dos produtos
  - `index.css` → importa diretivas Tailwind e define tokens globais
- `tailwind.config.js` → breakpoints exatos, cores e animações (skeleton)

## Funcionalidades

- **Navbar fixa** com logo, botão de tema (persistente) e badge de carrinho
- **Grid responsiva**:
  - ≤480px → 1 col
  - 481–768px → 2 cols
  - 769–1024px → 3 cols
  - ≥1025px → 4 cols
- **Cards** com:
  - imagem 1:1 (lazy loading)
  - título 2 linhas (ellipsis)
  - preço em BRL
  - rating com estrelas
  - tag “Novo” ou “Promo”
  - botão “Adicionar” (`solid`, `outline`, `ghost`)
- **Skeleton loader** com shimmer, sem layout shift
- **Dark mode** via `class` no `<body>`
- **Acessibilidade**: foco visível, `aria-*`, skip link
- **Transições** entre 150–250ms (transform/opacity)

## Rodar

Dentro da pasta `03-tailwind/`:

```bash
npm install
npm run dev
```

Abra em http://localhost:5173