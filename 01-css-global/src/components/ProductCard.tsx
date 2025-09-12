import React from 'react';
import type { Product } from '../types';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onAdd?: (p: Product) => void;
  addDisabled?: boolean;
  addLoading?: boolean;
}

const formatBRL = (n: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n);

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAdd,
  addDisabled,
  addLoading,
}) => {
  const { title, price, rating, tag, image } = product;

  // Mostrar estrelas ★ com aria-label dizendo "4.5 de 5"
  const stars = '★★★★★';
  const ratingValue = Math.max(0, Math.min(5, rating));
  const ratingLabel = `${ratingValue} de 5`;

  return (
    <article
      aria-label={title}
      className="product-card"
      tabIndex={-1}
    >
      {/* Espaço reservado 1:1 (imagem lazy) */}
      <a href="#" aria-label={`Ver detalhes de ${title}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          width={600}
          height={600}
          aria-hidden="true"
        />
      </a>

      <header>
        {/* Título com duas linhas (ellipsis virá no CSS) */}
        <h3 title={title}>{title}</h3>

        {/* Tag (Novo/Promo) — texto acessível */}
        {tag && <span className="tag" aria-label={`Marcado como ${tag}`}>{tag}</span>}
      </header>

      <p className="price">
        {formatBRL(price)}
      </p>

      {/* Rating com aria-label */}
      <div className="rating" aria-label={`Avaliação: ${ratingLabel}`}>
        <span aria-hidden="true">
          {stars.slice(0, Math.round(ratingValue))}{' '}
        </span>
        <span className="rating-number" aria-hidden="true">
          {ratingValue.toFixed(1)}
        </span>
      </div>

      {/* Ações */}
      <div className="actions">
        <Button
          onClick={() => onAdd?.(product)}
          disabled={addDisabled}
          loading={addLoading}
          variant="solid"
          aria-label={`Adicionar ${title} ao carrinho`}
        >
          Adicionar
        </Button>

        {/* Exemplos de variantes — ainda sem estilo */}
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </article>
  );
};
