# Versão 04 – styled-components

Esta versão implementa a tela usando **styled-components**, com `ThemeProvider` para alternar entre os temas claro/escuro.

## Estrutura

- `src/`
  - `App.tsx` → junta Navbar, Grid e ProductCards com `ThemeProvider`
  - `components/` → `Navbar`, `ProductCard`, `Button`, `Skeleton`
  - `hooks/useTheme.ts` → alternância claro/escuro com persistência (`localStorage`)
  - `data/products.ts` → 6 produtos de exemplo
  - `types.ts` → tipagem dos produtos
  - `styles/`
    - `theme.ts` → tokens, cores e breakpoints
    - `GlobalStyle.ts` → reset, cores, foco e utilitários
    - `styled.d.ts` → tipagem do tema para TS

## Funcionalidades

- **Navbar fixa** com logo, botão de tema (persistente) e badge de carrinho
- **Grid responsiva** com breakpoints exatos:
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
  - botão “Adicionar” (solid/outline/ghost)
- **Skeleton loader** com shimmer, sem layout shift
- **Dark mode** via `ThemeProvider`
- **Acessibilidade**: foco visível, `aria-*`, skip link
- **Transições** entre 150–250ms (transform/opacity)

## Rodar

Dentro da pasta `04-styled-components/`:

```bash
npm install
npm run dev
```

Abra em http://localhost:5173