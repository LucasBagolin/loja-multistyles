import React from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Skeleton } from './components/Skeleton';
import { products } from './data/products';
import type { Product } from './types';
import { useTheme } from "./hooks/useTheme";


function App() {
  const [cart, setCart] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  const { theme, toggleTheme } = useTheme();

  // Simula atraso de carregamento (skeleton)
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const handleAdd = (p: Product) => {
    setCart((prev) => [...prev, p]);
  };

  return (
    <>
      <Navbar
        cartCount={cart.length}
        currentTheme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="conteudo" tabIndex={-1}>
        <h1 className="visually-hidden">Lista de produtos</h1>

        {/* Grid — breakpoints só no Passo 4 (CSS) */}
        <section
          aria-label="Produtos"
          className="product-grid"
        >
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} aria-label="Carregando produto" />
              ))
            : products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAdd={handleAdd}
                  addLoading={false}
                  addDisabled={false}
                />
              ))}
        </section>
      </main>
    </>
  );
}

export default App;
