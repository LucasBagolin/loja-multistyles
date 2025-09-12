import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useTheme } from "./hooks/useTheme";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { Skeleton } from "./components/Skeleton";
import { products } from "./data/products";
import type { Product } from "./types";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[6]};
`;

const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr; /* <=480: 1 col */
  gap: ${({ theme }) => theme.space[5]};

  ${({ theme }) => theme.media.bp2} {
    grid-template-columns: repeat(2, 1fr); /* 481–768: 2 cols */
  }
  ${({ theme }) => theme.media.bp3} {
    grid-template-columns: repeat(3, 1fr); /* 769–1024: 3 cols */
  }
  ${({ theme }) => theme.media.bp4} {
    grid-template-columns: repeat(4, 1fr); /* ≥1025: 4 cols */
  }
`;

export default function App() {
  const { theme, themeName, toggleTheme } = useTheme();
  const [cart, setCart] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Simula atraso para skeleton
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const handleAdd = (p: Product) => setCart((prev) => [...prev, p]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Navbar
        cartCount={cart.length}
        currentTheme={themeName}
        onToggleTheme={toggleTheme}
      />

      <Main id="conteudo" tabIndex={-1}>
        <h1 className="visually-hidden">Lista de produtos</h1>

        <Grid aria-label="Produtos">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} aria-label="Carregando produto" />
              ))
            : products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAdd={handleAdd}
                  addDisabled={false}
                  addLoading={false}
                />
              ))}
        </Grid>
      </Main>
    </ThemeProvider>
  );
}
