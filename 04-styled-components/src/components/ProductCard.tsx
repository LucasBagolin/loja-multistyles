import React from "react";
import styled from "styled-components";
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

const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.card};
  padding: ${({ theme }) => theme.space[4]};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  transition: transform ${({ theme }) => theme.transitionBase} ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Image = styled.img`
  dysplay: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: linear-gradient(90deg, rgba(0,0,0,.05), rgba(0,0,0,.08));
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[3]};
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.3em * 2); /* reserva altura */
`;

const Tag = styled.span<{ $variant: "Novo" | "Promo" }>`
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid currentColor;
  color: ${({ theme, $variant }) =>
    $variant === "Novo" ? theme.colors.tagNovo : theme.colors.tagPromo};
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const Rating = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.muted};
`;

const RatingNumber = styled.span`
  font-variant-numeric: tabular-nums;
`;

const Actions = styled.div`
  margin-top: auto;
`;

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
    <Card aria-label={title} tabIndex={-1}>
      <a href="#" aria-label={`Ver detalhes de ${title}`}>
        <Image
          src={image}
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
      </a>

      <Header>
        <Title title={title}>{title}</Title>
        {tag && <Tag $variant={tag}>{tag}</Tag>}
      </Header>

      <Price>{formatBRL(price)}</Price>

      <Rating aria-label={`Avaliação: ${ratingLabel}`}>
        <span aria-hidden="true">
          {stars.slice(0, Math.round(ratingValue))}{" "}
        </span>
        <RatingNumber aria-hidden="true">
          {ratingValue.toFixed(1)}
        </RatingNumber>
      </Rating>

      <Actions>
        <Button
          onClick={() => onAdd?.(product)}
          disabled={addDisabled}
          loading={addLoading}
          variant="solid"
          aria-label={`Adicionar ${title} ao carrinho`}
        >
          Adicionar
        </Button>
      </Actions>
    </Card>
  );
};
