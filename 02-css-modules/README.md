# Versão 02 – CSS Modules

Esta versão implementa a tela usando **CSS Modules**, isolando os estilos por componente.

## Estrutura

- `src/`
  - `App.tsx` → junta Navbar, Grid e ProductCards
  - `components/` → `Navbar`, `ProductCard`, `Button`, `Skeleton` (cada um com seu `.module.css`)
  - `hooks/useTheme.ts` → alternância claro/escuro com persistência
  - `data/products.ts` → 6 produtos de exemplo
  - `types.ts` → tipagem dos produtos

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
  - botão “Adicionar” (variantes solid/outline/ghost via classes do módulo)
- **Skeleton loader** sem layout shift
- **Dark mode** aplicado a cores, sombras e bordas
- **Acessibilidade**: foco visível, `aria-*`, skip link
- **Transições** entre 150–250ms (transform/opacity)

## Rodar

Dentro da pasta `02-css-modules/`:

```bash
npm install
npm run dev
```

Abra em http://localhost:5173