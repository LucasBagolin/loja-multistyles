export type ProductTag = "Novo" | "Promo" | null;

export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  tag: ProductTag;
  image: string;
}