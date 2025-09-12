export type ProductTag = 'Novo' | 'Promo' | null;

export interface Product {
  id: string;
  title: string;
  price: number;      // em reais
  rating: number;
  tag: ProductTag;
  image: string;      // URL 1:1
}