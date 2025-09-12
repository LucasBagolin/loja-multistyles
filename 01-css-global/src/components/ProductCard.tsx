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

  const stars = '★★★★★';
  const ratingValue = Math.max(0, Math.min(5, rating));
  const ratingLabel = `${ratingValue} de 5`;

  return (
    <article aria-label={title} className="product-card" tabIndex={-1}>
      {/* Imagem com proporção 1:1 */}
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
        <h3 title={title}>{title}</h3>
        {tag && <span className="tag" aria-label={`Marcado como ${tag}`}>{tag}</span>}
      </header>

      <p className="price">{formatBRL(price)}</p>

      <div className="rating" aria-label={`Avaliação: ${ratingLabel}`}>
        <span aria-hidden="true">
          {stars.slice(0, Math.round(ratingValue))}{' '}
        </span>
        <span className="rating-number" aria-hidden="true">
          {ratingValue.toFixed(1)}
        </span>
      </div>

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
      </div>
    </article>
  );
};
