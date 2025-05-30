export interface IProduct {
  id: number;
  name: string;
  price: number | undefined;
  categoryId: number | undefined;
  brandId: number | undefined;
  size?: string;
  article: string;
  inStock: boolean;
  internalCode: string;
  description: string;
  isNew?: boolean;
  images: string[];
  [key: string]: unknown;
}
