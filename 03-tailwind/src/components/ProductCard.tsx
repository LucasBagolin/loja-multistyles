import React from "react";
import type { Product } from "../types";
import { Button } from "./Button";

interface ProductCardProps {
  product: Product;
  onAdd?: (p: Product) => void;
  addDisabled?: boolean;
  addLoading?: boolean;
}

const formatBRL = (n: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAdd,
  addDisabled,
  addLoading,
}) => {
  const { title, price, rating, tag, image } = product;

  const stars = "★★★★★";
  const ratingValue = Math.max(0, Math.min(5, rating));
  const ratingLabel = `${ratingValue} de 5`;

  return (
    <article
      aria-label={title}
      tabIndex={-1}
      className="border border-[var(--border)] rounded-[14px] bg-[var(--surface)] shadow-card dark:shadow-cardDark p-4 flex flex-col gap-3 transition
                 hover:-translate-y-0.5 duration-200"
    >
      {/* Imagem 1:1 com lazy loading e sem layout shift */}
      <a href="#" aria-label={`Ver detalhes de ${title}`} className="block">
        <img
          src={image}
          alt=""
          loading="lazy"
          width={600}
          height={600}
          aria-hidden="true"
          className="w-full aspect-square object-cover rounded-[10px] bg-gradient-to-r from-black/5 via-black/10 to-black/5 dark:from-white/0 dark:via-white/20 dark:to-white/0"
        />
      </a>

      {/* Título + Tag */}
      <header className="flex items-start justify-between gap-3">
        <h3 className="text-[16px] leading-snug line-clamp-2 min-h-[2.6em]" title={title}>
          {title}
        </h3>

        {tag && (
          <span
            className="rounded-full px-2 py-0.5 text-xs font-semibold border"
            style={{
              color: tag === "Novo" ? "var(--tag-novo)" : "var(--tag-promo)",
              borderColor: "currentColor",
              whiteSpace: "nowrap",
            }}
            aria-label={`Marcado como ${tag}`}
          >
            {tag}
          </span>
        )}
      </header>

      {/* Preço */}
      <p className="text-[18px] font-bold">{formatBRL(price)}</p>

      {/* Rating */}
      <div className="inline-flex items-center gap-2 text-[var(--muted)]" aria-label={`Avaliação: ${ratingLabel}`}>
        <span aria-hidden="true">{stars.slice(0, Math.round(ratingValue))} </span>
        <span className="tabular-nums" aria-hidden="true">
          {ratingValue.toFixed(1)}
        </span>
      </div>

      {/* Ação */}
      <div className="mt-auto">
        <Button
          onClick={() => onAdd?.(product)}
          disabled={addDisabled}
          loading={addLoading}
          variant="solid"
          aria-label={`Adicionar ${title} ao carrinho`}
          className="w-full"
        >
          Adicionar
        </Button>
      </div>
    </article>
  );
};
