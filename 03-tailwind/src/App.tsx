import React from "react";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { Skeleton } from "./components/Skeleton";
import { products } from "./data/products";
import type { Product } from "./types";
import "./index.css";

export default function App() {
  const [cart, setCart] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const handleAdd = (p: Product) => setCart((prev) => [...prev, p]);

  return (
    <>
      <Navbar cartCount={cart.length} />

      <main id="conteudo" tabIndex={-1} className="max-w-[1200px] mx-auto px-4 pb-6 pt-5">
        <h1 className="visually-hidden">Lista de produtos</h1>

        {/* Grid responsiva com os breakpoints exatos:
            base (≤480): 1 col
            bp2 (≥481):  2 cols
            bp3 (≥769):  3 cols
            bp4 (≥1025): 4 cols */}
        <section
          aria-label="Produtos"
          className="grid grid-cols-1 gap-5 bp2:grid-cols-2 bp3:grid-cols-3 bp4:grid-cols-4"
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
                  addDisabled={false}
                  addLoading={false}
                />
              ))}
        </section>
      </main>
    </>
  );
}