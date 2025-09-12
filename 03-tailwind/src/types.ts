export type ProductTag = "Novo" | "Promo" | null;

export interface Product {
  id: string;
  title: string;
  price: number;   // preço em BRL
  rating: number;  // 0..5
  tag: ProductTag;
  image: string;   // URL 1:1
}
